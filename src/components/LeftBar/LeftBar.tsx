import React, {useEffect, useContext, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import PageCard from "../PageCard/PageCard";
import {MagazineContext} from '../../App'
import {pageDataType} from "../../types/page";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            backgroundColor: '#ff2f5a'
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: {
            ...theme.mixins.toolbar,
        },
        mainToolBar: {
            ...theme.mixins.toolbar,
            backgroundColor: '#ff2f5a'
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        leftCards: {
            height: 'calc(100vh - 124px)',
            overflow: 'auto',
            marginTop: 10
        }
    }),
);

interface Props {
    window?: () => Window;
}

const LeftBar = (props: Props) => {
    const magazineContext = useContext(MagazineContext);
    const [pages, setPages] = useState([]);
    const [searchPage, setSearchPage] = useState('')



    useEffect(() => {
        // @ts-ignore
        setPages(magazineContext.pagesData.pages);
        // @ts-ignore
        console.log(magazineContext.pagesData);
    }, [magazineContext]);
    
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSearch = (e: string) => {
      setSearchPage(e);
      console.log(e);
    };

    const searchedItems = pages.filter((page: pageDataType, index: number) => { 
      if(searchPage == null)
        {return page.articleName}
      if(page.articleName.toLowerCase().includes(searchPage.toLowerCase()))
        {return page.articleName}
    }).map((page, index) => {
      return (
        <PageCard key={index} data={page} />
      )
    })

    const drawer = (<div>
        <div className={classes.mainToolBar}>
            <h1 className='text-center text-white margin-0'>Ownable</h1>
        </div>
        <Divider />
        <TextField
            id="standard-search"
            label="Search page"
            type="search"
            style={{marginLeft: '20px'}}
            onChange={event => handleSearch(event.target.value)}
        />
        {handleSearch === null ? <div className={classes.leftCards}>
          {
            pages.map((page: pageDataType, index: number) => (
              <PageCard key={index} data={page} />
            ))
          }
        </div> :
        <div className={classes.leftCards}>
         {searchedItems}
        </div>}
    </div>);

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
    );
}

export default LeftBar

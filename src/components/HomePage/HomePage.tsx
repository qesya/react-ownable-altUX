import React, {useContext, useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FavoriteBadge from "../FavoriteModal/FavoriteModal";
import ItemCard from "../ItemCard/ItemCard";
import LeftBar from "../LeftBar/LeftBar";
import {MagazineContext} from "../../App";
import {pageDataType} from "../../types/page";
import {productDataType} from "../../types/product";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
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
        toolbar: {
            ...theme.mixins.toolbar,
        },
        mainToolBar: {
            ...theme.mixins.toolbar,
            backgroundColor: '#ff2f5a'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const HomePage: React.FC = () => {
    const classes = useStyles();
    const magazineContext = useContext(MagazineContext)
    const [pages, setPages] = useState([]);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        // @ts-ignore
        setPages(magazineContext.pagesData.pages);
    }, [magazineContext]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <FavoriteBadge />
                </Toolbar>
            </AppBar>
            <LeftBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    // @ts-ignore
                    pages.map((page: pageDataType, index: number) => page.articleId === magazineContext.pagesData.selectedPage ?
                            page.products.map((product:productDataType, index2: number) => (
                                // @ts-ignore
                                <ItemCard key={index2} data={product} />
                                ))
                    : '')
                }
            </main>
        </div>
    );
}

export default HomePage;

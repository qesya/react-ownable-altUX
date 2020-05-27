import React, {useContext} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {pageDataType} from "../../types/page";
import {MagazineContext} from "../../App";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '95%',
            marginLeft: '2.5%',
            marginTop: '3%',
            cursor: 'pointer'
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
            padding: 5
        },
        cover: {
            width: 75
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);
interface Props {
    data: pageDataType
}
export default function MediaControlCard(props: Props) {
    const magazineContext = useContext(MagazineContext)
    const classes = useStyles();

    return (
        // @ts-ignore
        <Card onClick={() => magazineContext.setPagesData({type: 'set-selected-page', value: props.data.articleId})} style={{border: '0px solid gray'}} className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={props.data.thumbnailUrl}
                title={props.data.articleName}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.data.articleName}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}

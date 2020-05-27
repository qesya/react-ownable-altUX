import React, {useContext, useEffect, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import FavoriteBadge from "../FavoriteBadge/FavoriteBadge";
import {pageDataType} from "../../types/page";
import {productDataType} from "../../types/product";
import ItemCard from "../ItemCard/ItemCard";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import {MagazineContext} from "../../App";

const FavoriteModal: React.FC = () => {
    // const classes = useStyles();
    const magazineContext = useContext(MagazineContext);
    const [pages, setPages] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    useEffect(() => {
        // @ts-ignore
        setPages(magazineContext.pagesData.pages);
    }, [magazineContext]);
    const handleClose = () => {
        setOpen(false);
    };


    const body = (
            <div style={{width: '100vw', height: '100vh', overflow: 'auto', backgroundColor: '#ffffff'}}>
                <div style={{width: '100%'}}>
                <IconButton onClick={() => setOpen(false)} color="secondary" aria-label="an" style={{float: 'right', marginRight: 20}}>
                    <ClearIcon />
                </IconButton>
                    {
                        // @ts-ignore
                        <br clear='all' />
                    }
                </div>
            {
                // @ts-ignore
                pages.map((page: pageDataType, index: number) => {
                    // @ts-ignore
                    return page.products.map((product:productDataType, index2: number) => magazineContext.pagesData.favoriteListId.includes(product.id) ? (
                        // @ts-ignore
                        <ItemCard key={index2} data={product} />
                    ) : '')
                })
            }
            </div>
    );

    return (
        <div style={{width: '100%'}}>
            <span onClick={handleOpen} style={{ float: 'right' }}>
                <FavoriteBadge />
            </span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default FavoriteModal

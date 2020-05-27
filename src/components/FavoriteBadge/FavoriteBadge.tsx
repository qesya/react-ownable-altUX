import React, {useContext, useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {MagazineContext} from "../../App";

const FavoriteBadge: React.FC = () => {
    const magazineContext = useContext(MagazineContext);
    const [favorite, setFavorite] = useState([]);
    useEffect(() => {
        // @ts-ignore
        setFavorite(magazineContext.pagesData.favoriteListId);
    }, [magazineContext]);
    return(
        <div style={{ width: '100%' }}>
            <Typography variant="h6" style={{float: 'right', cursor: 'pointer'}} >
                <Badge badgeContent={favorite.length} color="primary">
                    <FavoriteIcon />
                </Badge>
            </Typography>
        </div>
    )
}

export default FavoriteBadge

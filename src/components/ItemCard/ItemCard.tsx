import React, { useContext } from 'react';
import '../ProductCard/ProductCardsStyles.css';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { withRouter } from 'react-router-dom';
import {productDataType} from "../../types/product";
import {MagazineContext} from "../../App";

interface Props {
    data: productDataType
}

// @ts-ignore
const ItemCard: React.FC = (props: Props) => {
    const magazineContext = useContext(MagazineContext)
    return (
        <div>
            <div className='ch-cart-card'>
                <div className='ch-card-media'>
                    <img src={props.data.thumbnailUrl} alt='' />
                </div>
                <div className='ch-card-title'>
                    <h4>{props.data.name}</h4>
                </div>
                <div className='ch-card-price'>
                    <h3>{props.data.price && '$'}{props.data.price}</h3>
                </div>
                <CardActions>
                    {
                        // @ts-ignore
                        !magazineContext.pagesData.favoriteListId.includes(props.data.id) ?
                            <Button
                                className={'favorite-button'}
                                variant='contained'
                                color='secondary'
                                // @ts-ignore
                                onClick={() => magazineContext.setPagesData({type: 'add-favorite', value: props.data.id})}
                            >Add to Favorite
                            </Button> :
                            <Button
                                className={'favorite-button'}
                                variant='contained'
                                color='primary'
                                // @ts-ignore
                                onClick={() => magazineContext.setPagesData({type: 'remove-favorite', value: props.data.id})}
                            >Remove from Favorite
                            </Button>
                    }
                </CardActions>
            </div>
        </div>
    )
}

export default withRouter(ItemCard)

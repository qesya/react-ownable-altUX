import React from 'react';
import {productModels} from '../../models/models'
interface propsTypes {
    data: productModels,
    pageMode: string,
    addToFavoriteList: (data: productModels) => void
}

const ProductCard: React.FC<propsTypes>  = (props:propsTypes) => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={props.data.thumbnailUrl} alt='ownable'/>
            </div>
            <div>
                <h3>{props.data.name}</h3>
                <h5>{props.data.productTypeName} {props.data.brand && '('+props.data.brand+')'}</h5>
                <h6>£{props.data.price && props.data.price.toFixed(2)} </h6>
            </div>
            <div className='product-action'>
                {
                    props.pageMode !== 'favoriteList' &&
                    <button onClick={() => props.addToFavoriteList(props.data)}>Add to favorite</button>
                }
            </div>
        </div>
    )
}

export default ProductCard

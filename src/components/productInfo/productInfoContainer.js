import React from 'react';
import ProductInfo from './productInfo';
import { Redirect } from 'react-router-dom';


const ProductInfoContainer = (props) => {
    let product = props.location.product;
    let addProduct = props.location.addProduct;
    return (
        <div>
            {!product
                ? <Redirect to='/' />
                : <ProductInfo product={product} addProduct={addProduct} />
            }
        </div>
    )
}


export default ProductInfoContainer;
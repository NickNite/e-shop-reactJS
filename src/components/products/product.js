import React from 'react';
import styles from './product.module.css';
import { Card, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export const Product = ({ product, addProduct, addedToCart }) => {
    return (
        <div className={styles.product}>
            <Card>
                <NavLink to={{
                    pathname: '/product/' + product.type + '=' + product.id,
                    product: product,
                    addProduct: addProduct
                }}>
                    <div className={styles.image}>
                        <img src={product.image} className={styles.img} />
                    </div>
                </NavLink>
                <Card.Content>
                    {product.type == 'table'
                        ? <Card.Header>Dining table "{product.title}"</Card.Header>
                        : <Card.Header>Chair "{product.title}"</Card.Header>}
                    <Card.Meta>Producer:&ensp;{product.producer}</Card.Meta>
                </Card.Content>
                <Card.Content className={styles.price} >
                    <span>$&ensp;{product.price}</span>
                    <div className={styles.buttonAdd} onClick={addProduct.bind(this, product)}>
                        <Icon name='cart arrow down' size='big' color='blue' />
                    </div>
                    ({addedToCart})
            </Card.Content>
            </Card>
        </div >
    )
}
import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

const CartItem = ({ product, removeProduct, addedToCart }) => (
    <List verticalAlign='middle'>
        <List.Item className='cartItems'>
            <Image avatar src={product.image} />
            <List.Content id='information'>
                <strong>{product.title}</strong>
                <span>{product.price}$</span>
                <span>({addedToCart})</span>
            </List.Content>
            <List.Content >
                <Button onClick={removeProduct.bind(this, product.id)} color='red'>-</Button>
            </List.Content>
        </List.Item>
    </List>
)

export default CartItem;

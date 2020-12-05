import React from 'react';
import { Popup, Button, Icon } from 'semantic-ui-react'
import CartItem from '../cart/cartItemContainer';
import logo from '../../image/minimalist2.png';
import styles from './header.module.css';
import basketImg from '../../image/images.png'

export const Header = ({ total, count, items, removeProduct }) => {

    const cart = (
        <div className={styles.cartImg}>
            <img src={basketImg} />
            <span>{count}</span>
        </div>
    )
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} />
                <h2>Сomfortable Kitchen</h2>
            </div>
            <div className={styles.cart}>
                <Popup
                    wide='very'
                    on='click'
                    position='top center'
                    trigger={cart}
                    content={<div>{items.map((item, index) => <CartItem key={index} product={item} removeProduct={removeProduct} />)}
                        {items.length === 0
                            ? <strong>No produtcs</strong>
                            : <div className='fullPrice'>
                                <strong>Full price:&nbsp;{total}&nbsp;$</strong>
                                <Button>Go to Buy</Button>
                            </div>}
                    </div>}
                />
            </div>
        </div>
    )
}


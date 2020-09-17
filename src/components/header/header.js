import React from 'react';
import { Menu, Popup, Dropdown, Button } from 'semantic-ui-react'
import CatalogMenu from './dropdown/dropcatalog';
import CartItem from '../cart/cartItemContainer';

import logoSort from '../../image/sort_menu.png';

export const Header = ({ total, count, items, removeProduct }) => {
    return (
        <Menu >
            <CatalogMenu />
            <div className='headMid'>
                <div className='sortImg'>
                    <img src={logoSort} />
                </div>
                {/* <div className='logo'>
                    <img src={logo} />
                    <h2>IKEA for the little ones</h2>
                </div> */}
            </div>
            <Menu.Menu position='right' className='cartMenu'>
                <Popup
                    wide='very'
                    on='click'
                    trigger={<Dropdown icon='cart' text={`Cart (${count})`} className='cart' />}
                    content={<div>{items.map((item, index) => <CartItem key={index} product={item} removeProduct={removeProduct} />)}
                        {items.length === 0
                            ? <strong>No produtcs</strong>
                            : <div className='fullPrice'>
                                <strong>Full price:&nbsp;{total}&nbsp;$</strong>
                                <Button>Go to Buy</Button>
                            </div>}
                    </div>}
                />
            </Menu.Menu>

        </Menu>
    )
}
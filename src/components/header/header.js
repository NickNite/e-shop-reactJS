import React from 'react';
import { Menu, Popup, Dropdown, Button } from 'semantic-ui-react'
import DropdownExamplePointing from './dropdown/dropcatalog';
import CartItem from '../cart/cartItemContainer';

export const Header = ({ total, count, items, removeProduct }) => {
    return (
        <Menu>
            <DropdownExamplePointing />
            <Menu.Menu position='right'>
                <Menu.Item className='fullPrice'>
                    <strong>Full price:&nbsp;{total}&nbsp;$</strong>
                </Menu.Item>
                <Popup
                    wide='very'
                    on='click'
                    trigger={<Dropdown icon='cart' text={`Cart (${count})`} className='cart' />}
                    content={<div>{items.map((item, index) => <CartItem key={index} product={item} removeProduct={removeProduct} />)}
                        {items.length === 0
                            ? <strong>No produtcs</strong>
                            : <Button>Go to Buy</Button>}
                    </div>}
                    hideOnScroll
                />
            </Menu.Menu>
        </Menu>
    )
}
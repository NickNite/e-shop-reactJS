import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const MenuFilter = ({ sortProduct, setSort, searchText, setSearchText }) => {
    return (

        <Menu pointing vertical className='sortMenu'>
            <Menu.Item
                active={sortProduct === 'all'}
                onClick={setSort.bind(this, 'all')}
            >All</Menu.Item>
            <Menu.Item
                active={sortProduct === 'price_cheap'}
                onClick={setSort.bind(this, 'price_cheap')}
            >For the price (cheap)</Menu.Item>
            <Menu.Item
                active={sortProduct === 'price_expensive'}
                onClick={setSort.bind(this, 'price_expensive')}
            >For the price (expensive)</Menu.Item>
            <Menu.Item
                active={sortProduct === 'manufacturer'}
                onClick={setSort.bind(this, 'manufacturer')}
            >Manufacturer</Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='search' value={searchText} onChange={e => setSearchText(e.target.value)} />
            </Menu.Item>

        </Menu>

    )
};

export default MenuFilter;
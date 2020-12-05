import React from 'react';
import MenuFilter from './menuFilterContainer';
import { ChangeAdvertising } from '../../commonFiles/slide/changeAdvertising';
import PromoContainer from '../../commonFiles/promo/promoContainer';
import CatalogMenu from './dropdown/dropcatalog';

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <CatalogMenu />
                <div className='productSort'>
                    <h3>Sort</h3>
                    <MenuFilter />
                </div>
                <div className='advertising'>
                    <ChangeAdvertising />
                    <PromoContainer />
                </div>
            </div>
        </div>
    )
};

export default Navbar;
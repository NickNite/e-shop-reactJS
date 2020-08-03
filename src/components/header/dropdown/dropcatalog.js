import React from 'react'
import { Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const DropdownExamplePointing = () => (
    <Dropdown text='Catalog' className='item'>
        <Dropdown.Menu>
            <div className='productChange'>
                <NavLink to='/tables'>Tables</NavLink>
                <NavLink to='/chairs'>Chairs</NavLink>
            </div>
        </Dropdown.Menu>
    </Dropdown>
);

export default DropdownExamplePointing;
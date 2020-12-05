import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styles from '../navbar.module.css';



const trigger = (
    <span>
        <Icon name="content" size="big" color="teal" className={styles.trigger} />CATALOG
    </span >
)
const CatalogMenu = () => (
    <div className={styles.catalog}>
        <Dropdown trigger={trigger}>
            <Dropdown.Menu>
                <div className='productChange'>
                    <NavLink to='/tables'>Tables</NavLink>
                    <NavLink to='/chairs'>Chairs</NavLink>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    </div >
);

export default CatalogMenu;
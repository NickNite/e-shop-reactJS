import React from 'react';
import LoaderExampleInlineCentered from '../../components/preloader/preloader';
import styles from './promo.module.css';


export const PromoFeatured = ({ itemInfo }) => {
    return (
        <>
            {itemInfo ?
                <div className={styles.featured}>
                    <div>
                        <img src={itemInfo.image} />
                        <h5>{itemInfo.title}</h5>
                        <p>Price:&ensp;<span>{itemInfo.price}</span>&nbsp;$</p>
                    </div>
                </div>
                : <LoaderExampleInlineCentered />}
        </>
    )
}
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPromoItems } from '../../reducers/promoReducer';
import { PromoFeatured } from './promo';
import { sampleSize } from 'lodash';
import styles from './promo.module.css'

const PromoContainer = ({ promoItems, getPromoItems }) => {
    useEffect(() => {
        getPromoItems()
    }, [])

    let randomArr = sampleSize(promoItems, 3)

    return (
        <div className={styles.promoContainer}>
            <h3>Featured</h3>
            <PromoFeatured itemInfo={randomArr[0]} />
            <PromoFeatured itemInfo={randomArr[1]} />
            <PromoFeatured itemInfo={randomArr[2]} />
        </div>
    )
}

const mapStateToProps = ({ promo }) => {
    return {
        promoItems: promo.promoItems
    }
};

export default connect(mapStateToProps, { getPromoItems })(PromoContainer)
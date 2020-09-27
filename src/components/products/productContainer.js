import React, { useEffect } from 'react';
import Product from './cardItemContainer';
import { connect } from 'react-redux';
import LoaderExampleText from '../preloader/preloader';
import { getProduct } from '../../reducers/productReducer';
import { sortBy } from '../../commonFiles/sortBy';
import { useLocation } from 'react-router';
import MenuFilter from '../navbar/navbarContainer';
import { ChangeAdvertising } from '../../commonFiles/slide/changeAdvertising';
import PromoContainer from '../../commonFiles/promo/promoContainer';



const ProductContainer = (props) => {
    useEffect(() => {
        props.getProduct()
    }, [useLocation()])
    return (
        <div>
            {props.loading
                ? <LoaderExampleText />
                : <div className='main'>
                    <div className='navbar'>
                        <div className='productSort'>
                            <h3>Sort</h3>
                            <MenuFilter />
                        </div>
                        <div className='advertising'>
                            <ChangeAdvertising />
                            <PromoContainer />
                        </div>
                    </div>
                    <div className='productMain'>{props.product.length === 0
                        ? <div>No Results</div>
                        : props.product.map((item, index) =>
                            <Product key={index} product={item} />)
                    }
                    </div>
                </div>}
        </div >
    )
};
const mapStateToProps = ({ product, sort }) => {
    return {
        product: sortBy(product.products, sort.sortBy, sort.searchText),
        loading: product.loading
    }
};



export default connect(mapStateToProps, { getProduct })(ProductContainer);
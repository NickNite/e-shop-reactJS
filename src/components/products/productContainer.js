import React, { useEffect } from 'react';
import Product from './cardItemContainer';
import { connect } from 'react-redux';
import LoaderExampleText from '../preloader/preloader';
import { getProduct } from '../../reducers/productReducer';
import { sortBy } from '../../commonFiles/sortBy';
import { useLocation } from 'react-router';
import MenuFilter from '../navbar/navbarContainer';



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
                        <h3>Sort</h3>
                        <MenuFilter />
                    </div>
                    <div className='productMain'>{props.productTest.length === 0
                        ? <div>No Results</div>
                        : props.productTest.map((item, index) =>
                            <Product key={index} product={item} />)
                    }
                    </div>
                </div>}
        </div >
    )
};
const mapStateToProps = ({ product, sort }) => {
    return {
        productTest: sortBy(product.products, sort.sortBy, sort.searchText),
        loading: product.loading
    }
};



export default connect(mapStateToProps, { getProduct })(ProductContainer);
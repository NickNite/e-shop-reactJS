import { connect } from 'react-redux';
import { addProduct } from '../../reducers/cartReducer';
import { Product } from './product';



const mapStateToProps = ({ cart }, { product }) => {
    return {
        addedToCart: cart.items.reduce((count, i) => count + (i.id === product.id ? 1 : 0), 0)
    }
};

export default connect(mapStateToProps, { addProduct })(Product);
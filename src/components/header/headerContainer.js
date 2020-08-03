import { connect } from "react-redux";
import { Header } from "./header";
import { removeProduct } from "../../reducers/cartReducer";
import { uniqBy } from "lodash";


const mapStateToProps = ({ cart }) => {
    return {
        total: cart.items.reduce((count, item) => count + item.price, 0),
        items: uniqBy(cart.items),
        count: cart.items.length
    }
};


export default connect(mapStateToProps, { removeProduct })(Header);


import { connect } from "react-redux";
import { setSort, setSearchText } from "../../reducers/sortReducer";
import MenuFilter from "./navbar";

const mapStateToProps = ({ sort }) => {
    return {
        sortProduct: sort.sortBy,
        searchText: sort.searchText
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setSort: sort => dispatch(setSort(sort)),
        setSearchText: text => dispatch(setSearchText(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuFilter);
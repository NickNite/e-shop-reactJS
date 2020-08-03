import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { sortReducer } from "./sortReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";


const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer,
    sort: sortReducer
});



const store = createStore(reducers, applyMiddleware(logger, thunk));

window.store = store;
export default store;
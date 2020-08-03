import { productApi } from "../requests/firebaseRequests";

const SHOW_PRODUCT = 'reducers/SHOW-PRODUCT';
const SHOW_LOADING = 'reducers/SHOW-LOADING';


const initialState = {
    products: [],
    loading: false,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case SHOW_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export const showProduct = (payload) => ({ type: SHOW_PRODUCT, payload });
export const showLoadnig = () => ({ type: SHOW_LOADING });



export const getProduct = () => {
    return async (dispatch) => {
        dispatch(showLoadnig());
        let data;
        if (window.location.pathname === '/chairs') {
            data = await productApi.getChairs();
        } else if (window.location.pathname === '/tables') {
            data = await productApi.getTables();
        }
        const payload = Object.keys(data).map(key => {
            return {
                ...data[key],
            }
        })
        dispatch(showProduct(payload[0]))
    }
};
import { productApi } from "../requests/firebaseRequests";

const GET_PROMO = 'src/reducers/GET-PROMO';



const initialState = {
    promoItems: [],
}

export const promoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROMO:
            return {
                ...state,
                promoItems: action.payload
            }
        default:
            return state;
    }
}


const showPromoItems = (obj) => ({
    type: GET_PROMO, payload: Object.keys(obj).map(key => {
        return {
            ...obj[key],
        }
    })
});


export const getPromoItems = () => {
    return async (dispatch) => {
        const data = await productApi.getPromoItems();
        dispatch(showPromoItems(data))
    }
}

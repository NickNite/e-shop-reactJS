const ADD_PRODUCT = 'reducers/tables/ADD-PRODUCT';
const REMOVE_PRODUCT = 'reducers/tables/REMOVE-PRODUCT';


const initialState = {
    items: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: state.totalPrice + action.payload.price
            }
        case REMOVE_PRODUCT: {
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            }
        }
        default:
            return state;
    }
}


export const addProduct = (obj) => ({ type: ADD_PRODUCT, payload: obj });
export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, payload: id });
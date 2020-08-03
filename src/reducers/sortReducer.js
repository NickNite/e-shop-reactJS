
const SORT_BY = 'reducers/SORT-BY';
const SORT_BY_SEARCH = 'reducers/SORT-BY-SEARCH'

const initialState = {
    searchText: '',
    sortBy: 'all'
};

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SORT_BY_SEARCH:
            return {
                ...state,
                searchText: action.payload
            }
        default:
            return state;
    }
};

export const setSort = (payload) => ({ type: SORT_BY, payload });
export const setSearchText = (payload) => ({ type: SORT_BY_SEARCH, payload });






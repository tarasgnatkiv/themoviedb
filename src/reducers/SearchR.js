import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAIL,

    MORE_SEARCH_REQUEST,
    MORE_SEARCH_SUCCESS,
    MORE_SEARCH_FAIL,
} from '../constants/Search';

const InitialState = {
    error: null,
    loading: null,
    searchList: null,
    nextPage: 1,
    totalPages: null,
}

const SearchR = (state = InitialState, action) => {
    switch (action.type) {

        case SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                searchList: [...action.payload.results],
                countPages: action.payload.total_pages,
                nextPage: action.payload.page + 1
            }
        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.e,
            }
        case MORE_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MORE_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                searchList: [...state.searchList, ...action.payload.results],
                nextPage: action.payload.page + 1
            }
        case MORE_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.e,
            }
        default: return state;
    }
}

export default SearchR;
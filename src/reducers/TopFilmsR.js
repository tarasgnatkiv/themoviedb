import {
    TOP_FILMS_REQUEST,
    TOP_FILMS_SUCCESS,
    TOP_FILMS_FAIL,


    MORE_TOP_FILMS_REQUEST,
    MORE_TOP_FILMS_SUCCESS,
    MORE_TOP_FILMS_FAIL,
} from '../constants/TopFilms';

const InitialState = {
    topFilmsArray: null,
    error: null,
    loading: null,
    countPages: null,
}

const TopFilmsR = (state = InitialState, action) => {
    switch (action.type) {

        case TOP_FILMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TOP_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                topFilmsArray: [...action.payload.results],
                countPages: action.payload.total_pages,
                nextPage: action.payload.page + 1
            }
        case TOP_FILMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.e,
            }

        case MORE_TOP_FILMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MORE_TOP_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                topFilmsArray: [...state.topFilmsArray, ...action.payload.results],
                nextPage: action.payload.page + 1
            }
        case MORE_TOP_FILMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: return state;
    }
}

export default TopFilmsR;
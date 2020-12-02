import {
    GENERS_REQUEST,
    GENERS_SUCCESS,
    GENERS_FAIL,

    LIST_GENERS_REQUEST,
    LIST_GENERS_SUCCESS,
    LIST_GENERS_FAIL,

    MORE_LIST_GENERS_REQUEST,
    MORE_LIST_GENERS_SUCCESS,
    MORE_LIST_GENERS_FAIL,
} from '../constants/Geners';

const InitialState = {
    geners: null,
    error: null,
    loading: null,
    generList: null,
}

const GenersR = (state = InitialState, action) => {
    switch (action.type) {

        case GENERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GENERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                geners: [...action.payload.genres],
            }
        case GENERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.e,
            }
        case LIST_GENERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LIST_GENERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                generList: [...action.payload.results],
                nextPage: action.payload.page + 1
            }
        case LIST_GENERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.e,
            }
        case MORE_LIST_GENERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MORE_LIST_GENERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                generList: [...state.generList, ...action.payload.results],
                nextPage: action.payload.page + 1
            }
        case MORE_LIST_GENERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: return state;
    }
}

export default GenersR;
import {
    FILM_INFO_REQUEST,
    FILM_INFO_SUCCESS,
    FILM_INFO_FAIL,

    TRAILER_REQUEST,
    TRAILER_SUCCESS,
    TRAILER_FAIL,
} from '../constants/FilmInfo';

const InitialState = {
    trailer: null,
    currnetFilm: null,
    id: null,
    loading: false,
}

const ReducerFilmInfo = (state = InitialState, action) => {
    switch (action.type) {
        case FILM_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FILM_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                currnetFilm: action.payload,
            }
        case FILM_INFO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case TRAILER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TRAILER_SUCCESS:
            return {
                ...state,
                loading: false,
                trailer: [...action.payload.results],
            }
        case TRAILER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default: return state;
    }
}

export default ReducerFilmInfo;

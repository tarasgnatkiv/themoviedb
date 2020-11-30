import {
    FILM_INFO_REQUEST,
    FILM_INFO_SUCCESS,
    FILM_INFO_FAIL,

    TRAILER_REQUEST,
    TRAILER_SUCCESS,
    TRAILER_FAIL,
} from '../constants/FilmInfo';

import {
    FilmInfoAPI,
    FilmTrailerAPI
} from '../API/filmsApi';

const FilmInfo = async (dispatch, currentfilm) => {
    dispatch({ type: FILM_INFO_REQUEST });
    try {
        const response = await FilmInfoAPI(currentfilm);
        const res = await response.json();
        dispatch({ type: FILM_INFO_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: FILM_INFO_FAIL, payload: e });
    }
};

export const FilmInfoAction = dispatch => {
    return (currentfilm) => FilmInfo(dispatch, currentfilm);
}

const FilmTrailer = async (dispatch, trailer) => {
    dispatch({ type: TRAILER_REQUEST });
    try {
        const response = await FilmTrailerAPI(trailer);
        const res = await response.json();
        dispatch({ type: TRAILER_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: TRAILER_FAIL, payload: e });
    }
};

export const FilmTrailerAction = dispatch => {
    return (trailer) => FilmTrailer(dispatch, trailer);
}
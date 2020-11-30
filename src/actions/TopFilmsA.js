import {
    TOP_FILMS_REQUEST,
    TOP_FILMS_SUCCESS,
    TOP_FILMS_FAIL,


    MORE_TOP_FILMS_REQUEST,
    MORE_TOP_FILMS_SUCCESS,
    MORE_TOP_FILMS_FAIL,
} from '../constants/TopFilms';

import {
    TopFilmsAPI,
    MoreTopFilmsAPI
} from '../API/filmsApi';

const TopFilms = async dispatch => {
    dispatch({ type: TOP_FILMS_REQUEST });
    try {
        const response = await TopFilmsAPI();
        const res = await response.json();
        dispatch({ type: TOP_FILMS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: TOP_FILMS_FAIL, payload: e });
    }
};

const MoreTopFilms = async (dispatch, nextPage) => {
    dispatch({ type: MORE_TOP_FILMS_REQUEST });
    try {
        const response = await MoreTopFilmsAPI(nextPage);
        const res = await response.json();
        dispatch({ type: MORE_TOP_FILMS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: MORE_TOP_FILMS_FAIL, payload: e });
    }
}

export const TopFilmsAction = dispatch => {
    return () => TopFilms(dispatch);
}

export const MoreTopFilmsAction = dispatch => {
    return (nextPage) => MoreTopFilms(dispatch, nextPage);
}
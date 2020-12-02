import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAIL,

    MORE_SEARCH_REQUEST,
    MORE_SEARCH_SUCCESS,
    MORE_SEARCH_FAIL,
} from '../constants/Search';

import {
    SearchMovieAPI,
    MoreSearchMovieAPI
} from '../API/filmsApi';

const SearchFilm = async (dispatch, serachValue) => {
    dispatch({ type: SEARCH_REQUEST });
    try {
        const response = await SearchMovieAPI(serachValue);
        const res = await response.json();
        dispatch({ type: SEARCH_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: SEARCH_FAIL, payload: e });
    }
}


export const SearchFilmAction = dispatch => {
    return (serachValue) => SearchFilm(dispatch, serachValue);
}




const MoreSearchFilm = async (dispatch, serachValue, page) => {
    dispatch({ type: MORE_SEARCH_REQUEST });
    try {
        const response = await MoreSearchMovieAPI(serachValue, page);
        const res = await response.json();
        dispatch({ type: MORE_SEARCH_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: MORE_SEARCH_FAIL, payload: e });
    }
}


export const MoreSearchFilmAction = dispatch => {
    return (serachValue, page) => MoreSearchFilm(dispatch, serachValue, page);
}
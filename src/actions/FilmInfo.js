import {
    FILM_INFO_REQUEST,
    FILM_INFO_SUCCESS,
    FILM_INFO_FAIL,
} from '../constants/FilmInfo';

import {
    FilmInfoAPI,
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
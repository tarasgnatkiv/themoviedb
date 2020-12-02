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

import {
    GenersAPI,
    listGenerAPI,
    MoreListGenerAPI
} from '../API/filmsApi';

const Geners = async dispatch => {
    dispatch({ type: GENERS_REQUEST });
    try {
        const response = await GenersAPI();
        const res = await response.json();
        dispatch({ type: GENERS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GENERS_FAIL, payload: e });
    }
};

export const GenersAction = dispatch => {
    return () => Geners(dispatch);
}

const listGeners = async (dispatch, currentGener) => {
    dispatch({ type: LIST_GENERS_REQUEST });
    try {
        const response = await listGenerAPI(currentGener);
        const res = await response.json();
        dispatch({ type: LIST_GENERS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: LIST_GENERS_FAIL, payload: e });
    }
}


export const listGenersAction = dispatch => {
    return (currentGener) => listGeners(dispatch, currentGener);
}

const MoreListGeners = async (dispatch, currentGener, page) => {
    dispatch({ type: MORE_LIST_GENERS_REQUEST });
    try {
        const response = await MoreListGenerAPI(currentGener, page);
        const res = await response.json();
        dispatch({ type: MORE_LIST_GENERS_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: MORE_LIST_GENERS_FAIL, payload: e });
    }
}


export const MoreListGenersAction = dispatch => {
    return (currentGener, page) => MoreListGeners(dispatch, currentGener, page);
}

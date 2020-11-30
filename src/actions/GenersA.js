import {
    GENERS_REQUEST,
    GENERS_SUCCESS,
    GENERS_FAIL,
} from '../constants/Geners';

import {
    GenersAPI
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
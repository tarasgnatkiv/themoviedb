import {
    GENERS_REQUEST,
    GENERS_SUCCESS,
    GENERS_FAIL,
} from '../constants/Geners';

const InitialState = {
    geners: null,
    error: null,
    loading: null,
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
        default: return state;
    }
}

export default GenersR;
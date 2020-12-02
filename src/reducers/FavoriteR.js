import {
    ADD_FAVORITE_FILM,
} from '../constants/Favorite';

const InitialState = {
    favoriteArr: []
}

const FavoriteR = (state = InitialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE_FILM:
            return {
                ...state,
                favoriteArr: [...state.favoriteArr, action.data]
            }
        default: return state;
    }
}

export default FavoriteR;
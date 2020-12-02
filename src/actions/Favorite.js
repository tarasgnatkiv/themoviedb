import {
    ADD_FAVORITE_FILM,
} from '../constants/Favorite';

// export function AddFavoriteFilmAction(id) {
//     return { type: ADD_FAVORITE_FILM, id }
//   }

// export const AddFavoriteFilmAction = (dispatch, id) => {
//     return (dispatch, id);
// }

// export const AddFavoriteFilmAction = id => ({
//     type: ADD_FAVORITE_FILM,
//     id
// })

const AddFavoriteFilm = (dispatch, data) => {
    dispatch({ type: ADD_FAVORITE_FILM, data });
};

export const AddFavoriteFilmAction = dispatch => {
    return (data) => AddFavoriteFilm(dispatch, data);
}
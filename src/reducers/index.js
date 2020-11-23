import { combineReducers } from 'redux';
import ReducerPopularFilms from './ReducerPopularFilms';
import ReducerFilmInfo from './ReducerFilmInfo';

export default combineReducers({
    ReducerPopularFilms,
    ReducerFilmInfo
})
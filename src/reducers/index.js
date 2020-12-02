import { combineReducers } from 'redux';
import ReducerPopularFilms from './ReducerPopularFilms';
import ReducerFilmInfo from './ReducerFilmInfo';
import TopFilmsR from './TopFilmsR';
import GenersR from './GenersR';
import SearchR from './SearchR';



export default combineReducers({
    ReducerPopularFilms,
    ReducerFilmInfo,
    TopFilmsR,
    GenersR,
    SearchR
})
import { connect } from 'react-redux';
import { FilmInfoAction, FilmTrailerAction } from '../actions/FilmInfo';
import { AddFavoriteFilmAction } from '../actions/Favorite';
import FilmInfo from '../components/FilmInfo/FilmInfo';

const mapStateToProps = (state) => ({
    ReducerFilmInfo: state.ReducerFilmInfo,
    FavoriteR: state.FavoriteR
})

const mapDispatchToProps = dispatch => {
    return {
        FilmInfoAction: FilmInfoAction(dispatch),
        FilmTrailerAction: FilmTrailerAction(dispatch),
        // AddFavoriteFilmAction: (id) => dispatch(AddFavoriteFilmAction(id))
        AddFavoriteFilmAction: AddFavoriteFilmAction(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmInfo)
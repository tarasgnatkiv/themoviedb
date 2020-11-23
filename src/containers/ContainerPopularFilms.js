import { connect } from 'react-redux';
import { PopularFilmsAction, MorePopularFilmsAction } from '../actions/ActionsPopularFilm';
import ListPopularFilms from '../components/ListPopularFilms/ListPopularFilms';

const mapStateToProps = (state) => ({
    ReducerPopularFilms: state.ReducerPopularFilms
})

const mapDispatchToProps = dispatch => {
    return {
        PopularFilmsAction: PopularFilmsAction(dispatch),
        MorePopularFilmsAction: MorePopularFilmsAction(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPopularFilms)
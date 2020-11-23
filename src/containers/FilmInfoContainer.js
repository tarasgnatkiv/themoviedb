import { connect } from 'react-redux';
import { FilmInfoAction } from '../actions/FilmInfo';
import FilmInfo from '../components/FilmInfo/FilmInfo';

const mapStateToProps = (state) => ({
    ReducerFilmInfo: state.ReducerFilmInfo
})

const mapDispatchToProps = dispatch => {
    return {
        FilmInfoAction: FilmInfoAction(dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmInfo)
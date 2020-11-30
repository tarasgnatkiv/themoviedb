import { connect } from 'react-redux';
import { TopFilmsAction, MoreTopFilmsAction } from '../actions/TopFilmsA';
import ListTopFilm from '../components/ListTopFilm/ListTopFilm';

const mapStateToProps = (state) => ({
    TopFilmsR: state.TopFilmsR
})

const mapDispatchToProps = dispatch => {
    return {
        TopFilmsAction: TopFilmsAction(dispatch),
        MoreTopFilmsAction: MoreTopFilmsAction(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTopFilm)
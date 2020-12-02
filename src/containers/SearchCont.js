import { connect } from 'react-redux';
import { SearchFilmAction, MoreSearchFilmAction } from '../actions/Search';
import Search from '../components/Search/Search';

const mapStateToProps = (state) => ({
    SearchR: state.SearchR
})

const mapDispatchToProps = dispatch => {
    return {
        SearchFilmAction: SearchFilmAction(dispatch),
        MoreSearchFilmAction: MoreSearchFilmAction(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
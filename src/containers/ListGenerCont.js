import { connect } from 'react-redux';
import { listGenersAction,  MoreListGenersAction} from '../actions/GenersA';
import ListGenerFilm from '../components/ListGenerFilm/ListGenerFilm';

const mapStateToProps = (state) => ({
    GenersR: state.GenersR
})

const mapDispatchToProps = dispatch => {
    return {
        listGenersAction: listGenersAction(dispatch),
        MoreListGenersAction: MoreListGenersAction(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListGenerFilm)
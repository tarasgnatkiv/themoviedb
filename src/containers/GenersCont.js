import { connect } from 'react-redux';
import { GenersAction } from '../actions/GenersA';
import Geners from '../components/Geners/Geners';

const mapStateToProps = (state) => ({
    GenersR: state.GenersR
})

const mapDispatchToProps = dispatch => {
    return {
        GenersAction: GenersAction(dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Geners)
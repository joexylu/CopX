import { connect } from 'react-redux';
import SneakerShow from './sneaker_show';
import {getSneaker} from '../../actions/sneaker_actions';

const mSTP = (state, ownProps) => {
    return {
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId] || {},
        sneakerId: ownProps.match.params.sneakerId || null
    }
}

const mDTP = dispatch => {
    return {
        getSneaker: sneakerId => dispatch(getSneaker(sneakerId))
    }
}

export default connect(mSTP, mDTP)(SneakerShow);
import { connect } from 'react-redux';
import SneakerShow from './sneaker_show';
import {getSneaker} from '../../actions/sneaker_actions';
import {getAllListingitems} from '../../actions/listingitem_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return {
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId] || {},
        sneakerId: ownProps.match.params.sneakerId || null,
        ListingItems: Object.values(state.entities.listingItems)
    }
}

const mDTP = dispatch => {
    return {
        getSneaker: sneakerId => dispatch(getSneaker(sneakerId)),
        getListingItems: sneakerId => dispatch(getAllListingitems(sneakerId))
    }
}

export default connect(mSTP, mDTP)(SneakerShow);
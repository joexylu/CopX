import { connect  } from 'react-redux';
import { getUser } from "../../actions/user_actions"
import { getAllPurchased } from "../../actions/purchase_actions";
import {followSneaker, unFollowSneaker} from '../../actions/sneaker_actions';

import UserShow from "./user_show"

const mSTP = (state,ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        followingSneakers: state.entities.users[state.session.id].following_sneakers || [],
        purchasedSneakers: state.entities.purchasedItem.purchased_sneakers || [],
    })
}

const mDTP = dispatch => ({
    getUser: UserId => dispatch(getUser(UserId)),
    getAllPurchased: () => dispatch(getAllPurchased()),
    unFollowSneaker: sneakerId => dispatch(unFollowSneaker(sneakerId)),
    followSneaker: sneakerId => dispatch(followSneaker(sneakerId)),
})

export default connect(mSTP,mDTP)(UserShow);
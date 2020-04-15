import { connect  } from 'react-redux';
import { getUser } from "../../actions/user_actions"

// import {getListingitem} from "../../actions/listingitem_actions";
import UserShow from "./user_show"

const mSTP = (state,ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        followingSneakers: state.entities.users[state.session.id].following_sneakers || []
    })
}

const mDTP = dispatch => ({
    getUser: UserId => dispatch(getUser(UserId))
})

export default connect(mSTP,mDTP)(UserShow);
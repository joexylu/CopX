import { connect  } from 'react-redux';

// import {getListingitem} from "../../actions/listingitem_actions";
import UserShow from "./user_show"

const mSTP = (state,ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => ({
    
})

export default connect(mSTP,mDTP)(UserShow);
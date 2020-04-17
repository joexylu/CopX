import { connect  } from 'react-redux';
import ListingItemShow from "./listingItem_show";
import {getListingitem} from "../../actions/listingitem_actions";
import { makePurchased } from "../../actions/purchase_actions";

const mSTP = (state,ownProps) => {
    return ({
        item: state.entities.listingItems[ownProps.match.params.itemId] || {},
        isCurrentUser: !!state.session.id,
    })
}

const mDTP = dispatch => ({
    getListingitem: (itemId) => dispatch(getListingitem(itemId)),
    makePurchased: (info) => dispatch(makePurchased(info))
})

export default connect(mSTP,mDTP)(ListingItemShow);
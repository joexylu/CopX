import { connect  } from 'react-redux';
import ListingItemShow from "./listingItem_show";
import {getListingitem} from "../../actions/listingitem_actions";

const mSTP = (state,ownProps) => {
    return ({
        item: state.entities.listingItems[ownProps.match.params.itemId] || {},
    })
}

const mDTP = dispatch => ({
    getListingitem: (itemId) => dispatch(getListingitem(itemId))
})

export default connect(mSTP,mDTP)(ListingItemShow);
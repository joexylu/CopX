import { connect  } from 'react-redux';
import ListingItemsIndex from "./listingItems_index";
import {getAllListingitems} from "../../actions/listingitem_actions";

const mSTP = (state,ownProps) => {
    // debugger
    return ({
        listingItems: Object.values(state.entities.listingItems),
        sneakerId: ownProps.match.params.sneakerId
        // sneakerName: state.entities.listingItems
        // photoUrl: Object.values(state.entities.listingItems)[1].photoUrl || ""
    })
}

const mDTP = dispatch => ({
    getAllListingitems: (sneakerId) => dispatch(getAllListingitems(sneakerId))
})

export default connect(mSTP,mDTP)(ListingItemsIndex);
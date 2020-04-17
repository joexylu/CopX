import { connect  } from 'react-redux';
import PurchasedItemShow from "./purchaseditem";
import { getPurchased } from "../../actions/purchase_actions";

const mSTP = (state, ownProps) => {
    return ({
        userId: state.session.id,
        purchaseditem: state.entities.purchasedItem || {},
        purchaseId: ownProps.match.params.purchasedItemId
    })
}

const mDTP = dispatch => ({
    getPurchased: (itemId) => dispatch(getPurchased(itemId))
})

export default connect(mSTP,mDTP)(PurchasedItemShow);
import { RECEIVE_PURCHASED, RECEIVE_ALL_PURCHASED } from "../actions/purchase_actions";

const purchasedItemReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_PURCHASED:
            return action.purchasedItems
        case RECEIVE_PURCHASED:
            // nextState[action.purchasedItem.id] = action.purchasedItem
            // return nextState
            return action.purchasedItem
        default:
            return state;
    }
}

export default purchasedItemReducer;
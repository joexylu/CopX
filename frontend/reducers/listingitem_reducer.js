import { RECEIVE_ALL_LISTINGITEMS, RECEIVE_LISTINGITEM } from "../actions/listingitem_actions"


const listingItemReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_LISTINGITEMS:
            return Object.assign({}, action.listingItems)
        case RECEIVE_LISTINGITEM:
            nextState[action.listingItem.id] = action.listingItem
            return nextState
        default:
            return state;
    }
}

export default listingItemReducer;
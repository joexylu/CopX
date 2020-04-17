import { RECEIVE_ALL_FOLLOWING } from "../actions/following_actions";

const followingItemReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWING:
            return action.followingItems

        default:
            return state;
    }
}

export default followingItemReducer;
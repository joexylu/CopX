import {RECEIVE_ALL_SNEAKERS, RECEIVE_SNEAKER} from "../actions/sneaker_actions"

const sneakerReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_SNEAKERS:
            return Object.assign({}, action.sneakers)
        case RECEIVE_SNEAKER:
            nextState[action.sneaker.id] = action.sneaker
            return nextState
        default:
            return state;
    }
}

export default sneakerReducer;
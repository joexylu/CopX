import {fetchSneakers, fetchSneaker, fetchSneakerByBrand} from "../util/sneaker_api_util"
import { postFollow, destoryFollow } from "../util/follow_api_util"

export const RECEIVE_ALL_SNEAKERS = "RECEIVE_ALL_SNEAKERS"
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER"


const receive_all_sneakers = sneakers => ({
    type: RECEIVE_ALL_SNEAKERS,
    sneakers
})

const receive_sneaker = sneaker => ({
    type: RECEIVE_SNEAKER,
    sneaker
})

export const getAllSneakers = () => dispatch => fetchSneakers()
    .then((response) => dispatch(receive_all_sneakers(response)))

export const getAllSneakersByBrand = (brand) => dispatch => fetchSneakerByBrand(brand)
    .then((response) => dispatch(receive_all_sneakers(response)))

export const getSneaker = (sneakerId) => dispatch => fetchSneaker(sneakerId)
    .then((response) => dispatch(receive_sneaker(response)))

export const followSneaker = (id) => dispatch => postFollow(id)
    .then(sneaker => dispatch(receive_sneaker(sneaker)))

export const unFollowSneaker = (id) => dispatch => destoryFollow(id)
    .then(sneaker => dispatch(receive_sneaker(sneaker)))
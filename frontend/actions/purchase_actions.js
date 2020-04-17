import { fetchUserPurchasedItems, fetchPurchasedItem, postPurchase } from "../util/purchase_api_util";

export const RECEIVE_ALL_PURCHASED = "RECEIVE_ALL_PURCHASED";
export const RECEIVE_PURCHASED = "RECEIVE_PURCHASED";

const receiveAllPurchased = purchasedItems => ({
    type: RECEIVE_ALL_PURCHASED,
    purchasedItems
})

const receivePurchased = purchasedItem => ({
    type: RECEIVE_PURCHASED,
    purchasedItem
})

export const getAllPurchased= () => dispatch => fetchUserPurchasedItems()
    .then(res => dispatch(receiveAllPurchased(res)))

export const getPurchased = (itemId) => dispatch => fetchPurchasedItem(itemId)
    .then(res => dispatch(receivePurchased(res)))

export const makePurchased = (info) => dispatch => postPurchase(info)
    .then(res => dispatch(receivePurchased(res)))
import {fetchListingItems, fetchListingItem} from "../util/listingitem_api-util"

export const RECEIVE_ALL_LISTINGITEMS = "RECEIVE_ALL_LISTINGITEMS"
export const RECEIVE_LISTINGITEM = "RECEIVE_LISTINGITEM"

const receiveAllListingItems = listingItems => ({
    type: RECEIVE_ALL_LISTINGITEMS,
    listingItems
})

const receiveListingItem = listingItem => ({
    type: RECEIVE_LISTINGITEM,
    listingItem
})


export const getAllListingitems = (sneakerId) => dispatch => fetchListingItems(sneakerId)
    .then(response => dispatch(receiveAllListingItems(response)))

export const getListingitem = (itemId) => dispatch => fetchListingItem(itemId)
    .then(response => dispatch(receiveListingItem(response)))
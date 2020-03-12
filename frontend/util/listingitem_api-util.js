export const fetchListingItems = (sneakerId) => {
    return $.ajax({
        method: "GET",
        url: `/api/sneakers/${sneakerId}/listingitems`
    })
}

export const fetchListingItem = (itemId) => {
    return $.ajax({
        method: "GET",
        url: `/api/listingitems/${itemId}`
    })
}
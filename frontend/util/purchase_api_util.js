export const fetchPurchasedItem = (itemId) => {
    return $.ajax({
        method: "GET",
        url: `/api/purchaseditems/${itemId}`
    })
}

export const postPurchase = (info) => {
    return $.ajax({
        method: "POST",
        url: "/api/purchaseditems",
        data: info
    })
}
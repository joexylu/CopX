export const fetchSneakers = () => {
    return $.ajax({
        method: "GET",
        url: "/api/sneakers"
    })
}

export const fetchSneaker = (sneakerId) => {
    return $.ajax({
        method: "GET",
        url: `/api/sneakers/${sneakerId}`
    })
}


export const fetchSneakerByBrand = (brand) => {
    return $.ajax({
        method: "GET",
        url: `/api/sneakers/`,
        data: {brand: brand}
    })
}

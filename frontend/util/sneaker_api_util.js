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


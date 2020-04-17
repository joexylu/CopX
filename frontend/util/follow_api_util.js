export const fetchUserFollowingItems = () => {
    return $.ajax({
        method: "GET",
        url: `/api/follows`
    })
}

export const postFollow = (id) => {
    return $.ajax({
        url: "api/follows",
        method: "POST",
        data: {id}
    })
}

export const destoryFollow = (id) => {
    return $.ajax({
        url: `api/follows`,
        method: "DELETE",
        data: {id}
    })
}
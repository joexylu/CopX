export const fetchUser = (UserId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${UserId}`
    })
}
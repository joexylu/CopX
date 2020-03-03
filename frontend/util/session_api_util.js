export const postUser = (user) => {
    return $.ajax({
        url: "api/users",
        method: "POST",
        data: { user }
    })
}

export const postSession = (user) => {
    return $.ajax({
        url: "api/session",
        method: "POST",
        data: { user }
    })
}

export const destorySession = () => {
    return $.ajax({
        url: "api/session",
        method: "DELETE"
    })
}
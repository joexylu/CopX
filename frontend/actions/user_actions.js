import { fetchUser } from "../util/user_api_util"

export const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const getUser = (UserId) => dispatch => fetchUser(UserId)
    .then(response => dispatch(receiveUser(response)))
import { postUser, postSession, destorySession } from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})

export const signup = (user) => dispatch => postUser(user)
    .then((response) => dispatch(receiveCurrentUser(response)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const login = (user) => dispatch => postSession(user)
    .then((response) => dispatch(receiveCurrentUser(response)), (errors) => dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => destorySession()
    .then(() => dispatch(logoutCurrentUser()));

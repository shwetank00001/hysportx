import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL} from "./actionTypes";

export const loginUserRequest = (data, history) => ({
    type: LOGIN_USER_REQUEST,
    payload: data,
    history:history
})

export const loginUserSuccess = (data) => ({
    type: LOGIN_USER_SUCCESS,
    payload: data,
})

export const loginUserFail = (data) => ({
    type: LOGIN_USER_FAIL,
    payload: data,
})

export const logoutUserRequest = (history) => ({
    type: LOGOUT_USER_REQUEST,
    history:history
})

export const logoutUserSuccess = (data) => ({
    type: LOGOUT_USER_SUCCESS,
    payload: data,
})

export const logoutUserFail = (data) => ({
    type: LOGOUT_USER_FAIL,
    payload: data,
})

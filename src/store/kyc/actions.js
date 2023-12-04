import {
    ORGANIZATION_REPRESENTOR_VERIFY,
    ORGANIZATION_REPRESENTOR_SUCCESS,
    ORGANIZATION_REPRESENTOR_FAIL,
    PERSONAL_REPRESENTOR_VERIFY,
    PERSONAL_REPRESENTOR_SUCCESS,
    PERSONAL_REPRESENTOR_FAIL,
    ORGANIZATION_REPRESENTOR_REQUEST,
    PERSONAL_REPRESENTOR_REQUEST,
    } from './actionTypes';

export const organization_representor_verify = values => ({
    type: ORGANIZATION_REPRESENTOR_VERIFY,
    payload: values,
});

export const organization_representor_success  =  kyc  =>({
    type: ORGANIZATION_REPRESENTOR_SUCCESS,
    payload: kyc
})

export const organization_representor_fail = error => ({
    type: ORGANIZATION_REPRESENTOR_FAIL,
    payload: error
})
export const organization_representor_request = () => ({
    type: ORGANIZATION_REPRESENTOR_REQUEST,
})

export const personal_representor_verify = kyc => ({
    type: PERSONAL_REPRESENTOR_VERIFY,
    payload: kyc,
});

export const personal_representor_success=  kyc  =>({
    type: PERSONAL_REPRESENTOR_SUCCESS,
    payload: kyc
})

export const personal_representor_fail = error => ({
    type: PERSONAL_REPRESENTOR_FAIL,
    payload: error
})
export const personal_representor_request = () => ({
    type: PERSONAL_REPRESENTOR_REQUEST,
    payload: error
})

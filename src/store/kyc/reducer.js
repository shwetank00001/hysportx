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

const INIT_STATE = {
    kyc: {},
    error: {},
    kycApply: {},
    loading: false
}
const kycReducer  = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ORGANIZATION_REPRESENTOR_VERIFY:
            return {
                ...state,
                ['kyc']: action.payload
            }
            break;
        case ORGANIZATION_REPRESENTOR_SUCCESS:
            return {
                ...state,
                ['loading']: false
            };
        case ORGANIZATION_REPRESENTOR_FAIL:
            return {
                ...state,
                ['loading']: false
            };
        case ORGANIZATION_REPRESENTOR_REQUEST:
            return {
                ...state,
                ['loading']: true
            };
        case PERSONAL_REPRESENTOR_VERIFY:
            break;
        case PERSONAL_REPRESENTOR_SUCCESS:
            return {
                ...state,
                ['loading']: false
            };
        case PERSONAL_REPRESENTOR_FAIL:
            return {
                ...state,
                ['loading']: false
            };
        case PERSONAL_REPRESENTOR_REQUEST:
            return {
                ...state,
                ['loading']: true
            };
        default:
            return state;
    }
}

export default kycReducer;
import { takeEvery, call, put } from "redux-saga/effects";
import { kyc } from "../../helpers/api";

import {
    ORGANIZATION_REPRESENTOR_VERIFY,
    ORGANIZATION_REPRESENTOR_SUCCESS,
    ORGANIZATION_REPRESENTOR_FAIL,
    ORGANIZATION_REPRESENTOR_REQUEST,
    PERSONAL_REPRESENTOR_VERIFY,
    PERSONAL_REPRESENTOR_SUCCESS,
    PERSONAL_REPRESENTOR_FAIL,
    PERSONAL_REPRESENTOR_REQUEST,
} from "./actionTypes";

function* organization_representor_verify(data){
    let payload = data.payload;
    const response = yield call(kyc.store,{...payload });
}

function* kycSaga() {
    yield takeEvery(ORGANIZATION_REPRESENTOR_VERIFY, organization_representor_verify);
}
export default kycSaga;
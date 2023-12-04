import { takeLatest, put, call } from 'redux-saga/effects';
import { shortcut } from 'helpers/api';
import {
  SHORTCUT_ADD_REQUEST,
  SHORTCUT_LIST_REQUEST,
  SHORTCUT_UPDATE_REQUEST,
  SHORTCUT_DELETE_REQUEST,
  SHORTCUT_ADD_SUCCESS,
  SHORTCUT_LIST_SUCCESS,
  SHORTCUT_UPDATE_SUCCESS,
  SHORTCUT_DELETE_SUCCESS,
  SHORTCUT_ADD_FAIL,
  SHORTCUT_LIST_FAIL,
  SHORTCUT_UPDATE_FAIL,
  SHORTCUT_DELETE_FAIL,
  SHORTCUT_DETAILS_REQUEST,
  SHORTCUT_DETAILS_SUCCESS,
  SHORTCUT_DETAILS_FAIL,
} from './actionTypes';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* addShortcutSaga(action) {
    try {
        const data = yield call(shortcut.add, action.payload);
        yield put({ type: SHORTCUT_ADD_SUCCESS, payload: data.data });
        action.handleCloseModal();
        toast.success("Shortcode added successfully.", { autoClose: 2000 });
    } catch (error) {
        yield put({type: SHORTCUT_ADD_FAIL, payload:error});
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}

function* listShortcutsSaga() {
    try {
        const data = yield call(shortcut.list);
        yield put({ type: SHORTCUT_LIST_SUCCESS, payload: data.data });
    } catch (error) {
        yield put({ type: SHORTCUT_LIST_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}

function* updateShortcutSaga(action) {
    try {
        const data = yield call(shortcut.edit, action.payload);
        yield put({ type: SHORTCUT_UPDATE_SUCCESS, payload:data});
        action.handleCloseModal();
        toast.success("Shortcode added successfully.", { autoClose: 2000 });
    } catch (error) {
        yield put({type: SHORTCUT_UPDATE_FAIL, payload:error});
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}

function* deleteShortcutSaga(action) {
    try {
        const response = yield call(shortcut.delete, action.payload);
        yield put({ type: SHORTCUT_DELETE_SUCCESS, payload: response.data });
        console.log('12');
        toast.success("Shortcode deleted successfully.", { autoClose: 2000 });
        
    } catch (error) {
        yield put({ type: SHORTCUT_DELETE_FAIL, payload: error });
        toast.error("Please Fixed all errors.", { autoClose: 2000 });
    }
}

function* detailsShortcutSaga(action){
    try{
        const response = yield  call(shortcut.details,action.payload);
        yield put({ type: SHORTCUT_DETAILS_SUCCESS, payload: response.data });
        action.onDetailsSuccess(response?.data)
        toast.success("Shortcode added successfully.", { autoClose: 2000 });
    }catch(error){
        yield put({ type: SHORTCUT_DETAILS_FAIL, payload: response.data });
        toast.error("Shortcode added successfully.", { autoClose: 2000 });
    }
}

export default function* shortcutSaga() {
    yield takeLatest(SHORTCUT_ADD_REQUEST, addShortcutSaga);
    yield takeLatest(SHORTCUT_LIST_REQUEST, listShortcutsSaga);
    yield takeLatest(SHORTCUT_UPDATE_REQUEST, updateShortcutSaga);
    yield takeLatest(SHORTCUT_DELETE_REQUEST, deleteShortcutSaga);
    yield takeLatest(SHORTCUT_DETAILS_REQUEST, detailsShortcutSaga);
}

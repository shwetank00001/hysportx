import {
    SHORTCUT_ADD_REQUEST,
    SHORTCUT_ADD_SUCCESS,
    SHORTCUT_ADD_FAIL,
    SHORTCUT_LIST_REQUEST,
    SHORTCUT_LIST_SUCCESS,
    SHORTCUT_LIST_FAIL,
    SHORTCUT_UPDATE_REQUEST,
    SHORTCUT_UPDATE_SUCCESS,
    SHORTCUT_UPDATE_FAIL,
    SHORTCUT_DELETE_REQUEST,
    SHORTCUT_DELETE_SUCCESS,
    SHORTCUT_DELETE_FAIL,
    SHORTCUT_DETAILS_REQUEST,
    SHORTCUT_DETAILS_SUCCESS,
    SHORTCUT_DETAILS_FAIL } from './actionTypes';

export const shortcutAddRequest = (shortcutData, handleCloseModal) => ({
    type: SHORTCUT_ADD_REQUEST,
    payload: shortcutData,
    handleCloseModal: handleCloseModal,
});

export const shortcutAddSuccess = (newShortcut) => ({
    type: SHORTCUT_ADD_SUCCESS,
    payload: newShortcut,
});

export const shortcutAddFail = (error) => ({
    type: SHORTCUT_ADD_FAIL,
    payload: error,
});

export const shortcutDetailsRequest = (shortcutDetails,onDetailsSuccess,onDetailsFail) => ({
    type: SHORTCUT_DETAILS_REQUEST,
    payload: shortcutDetails,
    onDetailsSuccess: onDetailsSuccess,
    onDetailsFail: onDetailsFail
    
});

export const shortcutDetailsSuccess = (newShortcutDetail) => ({
    type: SHORTCUT_DETAILS_SUCCESS,
    payload: newShortcutDetail,
});

export const shortcutDetailsFail = (error) => ({
    type: SHORTCUT_DETAILS_FAIL,
    payload: error,
});

export const shortcutListRequest = () => ({
    type: SHORTCUT_LIST_REQUEST,
});

export const shortcutListSuccess = (shortcuts) => ({
    type: SHORTCUT_LIST_SUCCESS,
    payload: shortcuts,
});

export const shortcutListFail = (error) => ({
    type: SHORTCUT_LIST_FAIL,
    payload: error,
});

export const shortcutUpdateRequest = (shortcutData, handleCloseModal) => ({
    type: SHORTCUT_UPDATE_REQUEST,
    payload: shortcutData,
    handleCloseModal: handleCloseModal,
});

export const shortcutUpdateSuccess = (updatedShortcut) => ({
    type: SHORTCUT_UPDATE_SUCCESS,
    payload: updatedShortcut,
});

export const shortcutUpdateFail = (error) => ({
    type: SHORTCUT_UPDATE_FAIL,
    payload: error,
});

export const shortcutDeleteRequest = (shortcutId) => ({
    type: SHORTCUT_DELETE_REQUEST,
    payload: shortcutId,
});

export const shortcutDeleteSuccess = (deletedShortcutId) => ({
    type: SHORTCUT_DELETE_SUCCESS,
    payload: deletedShortcutId,
});

export const shortcutDeleteFail = (error) => ({
    type: SHORTCUT_DELETE_FAIL,
    payload: error,
});
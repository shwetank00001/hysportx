import { SHORTCUT_ADD_REQUEST, SHORTCUT_ADD_SUCCESS, SHORTCUT_ADD_FAIL, SHORTCUT_LIST_REQUEST, SHORTCUT_LIST_SUCCESS, SHORTCUT_LIST_FAIL, SHORTCUT_UPDATE_REQUEST, SHORTCUT_UPDATE_SUCCESS, SHORTCUT_UPDATE_FAIL, SHORTCUT_DELETE_REQUEST, SHORTCUT_DELETE_SUCCESS, SHORTCUT_DELETE_FAIL, SHORTCUT_DETAILS_REQUEST, SHORTCUT_DETAILS_SUCCESS, SHORTCUT_DETAILS_FAIL} from './actionTypes';

const initialState = {
    shortcuts: [],
    loading: false,
    error: null,
    details:{},
    message: '',
};

const shortcutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHORTCUT_ADD_REQUEST:
        case SHORTCUT_LIST_REQUEST:
        case SHORTCUT_UPDATE_REQUEST:
        case SHORTCUT_DELETE_REQUEST:
        case SHORTCUT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case SHORTCUT_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                shortcuts: [...state.shortcuts, action.payload],
            };

        case SHORTCUT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                shortcuts: action.payload,
            };

        case SHORTCUT_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                shortcuts: state.shortcuts.map(shortcut => 
                    shortcut.id === action.payload.id ? action.payload : shortcut
                ),
            };

        case SHORTCUT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                shortcuts: state.shortcuts.filter(shortcut => shortcut.id !== action.payload.id),
            };
        case SHORTCUT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details:{...action.payload}
            };

        case SHORTCUT_ADD_FAIL:
        case SHORTCUT_LIST_FAIL:
        case SHORTCUT_UPDATE_FAIL:
        case SHORTCUT_DELETE_FAIL:
        case SHORTCUT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default shortcutReducer;
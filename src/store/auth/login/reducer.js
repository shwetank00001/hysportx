import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL} from "./actionTypes";

const initialState = {
	user:{},
	error: "",
	loading: false,
}

const login = (state = initialState, action) => {
  	switch (action.type) {
		case LOGIN_USER_REQUEST:
		case LOGOUT_USER_REQUEST:
			return {
				...state,
				loading: true,
			}
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
				isUserLogout: false,
			}
			
		case LOGOUT_USER_SUCCESS:
			return {
				...state,
				user: {},
				loading: false,
				isUserLogout: true,
			}
		case LOGIN_USER_FAIL:
		case LOGOUT_USER_FAIL:
			return {
				...state,
				loading: false,
			}
		default:
			return{ ...state }
	}
}

export default login;
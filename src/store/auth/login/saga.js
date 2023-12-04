import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL } from "./actionTypes";
import { auth } from "../../../helpers/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* loginUser(action) {
    try{
        const response = yield call(auth.login, action.payload);
		localStorage.setItem("_token", JSON.stringify(response._token).slice(1, -1));
		localStorage.setItem("user", JSON.stringify(response.data.user));
		yield put({type:LOGIN_USER_SUCCESS, payload:response.data.user});
		toast.success("Login Successfully.", { autoClose: 2000 });
		console.log(`/${response.data.user.role.role_type.toLowerCase()}/dashboard`);
		action.history(`/${response.data.user.role.role_type.toLowerCase()}/dashboard`)
    } catch (error) {
		yield put({type:LOGIN_USER_FAIL});
		toast.error("Invalid Credentials.", { autoClose: 2000 });
    }
}

function* logoutUser(action) {
	try {
		// const response = yield call(auth.login);
		localStorage.removeItem("_token");
		localStorage.removeItem("user");
		yield put({type:LOGOUT_USER_SUCCESS});
		toast.success("Logout Successfully.", { autoClose: 2000 });
		action.history('/login');
	} catch (error) {
		yield put({type:LOGOUT_USER_FAIL});
		toast.error("Logout Failed.", { autoClose: 2000 });
	}
}

function* authSaga() {
	yield takeEvery(LOGIN_USER_REQUEST, loginUser)
	yield takeEvery(LOGOUT_USER_REQUEST, logoutUser)
}

export default authSaga;
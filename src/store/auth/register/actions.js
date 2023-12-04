import { Await } from "react-router-dom"
import {post} from  "../../../helpers/api_helper"
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
} from "./actionTypes"

export const registerUser = async user => {
  let url="http://127.0.0.1:8000/api/register";
  const reg_Response= await post(url,user);
  return {
     
    type: REGISTER_USER,
    payload: { user,reg_Response },
  }
}

export const registerUserSuccessful = user => {
  console.log("user",user);
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  }
}

export const registerUserFailed = user => {
  return {
    type: REGISTER_USER_FAILED,
    payload: user,
  }
}

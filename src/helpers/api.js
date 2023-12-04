import axios from "axios";
import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper";
export const auth = {
	login: (data) => post('/login', data),
	logout: () => post('/logout'),
};

export const kyc = {
  	store: (data) => post('/kyc/store', data),
};

export const shortcut = {
	add: (data) => post('/createcode', data),
	edit: (data) => post('/updatecode', data),
	list: () => post('/readcode'),
	details: (data) => post('/readcode', data),
	delete:(data) => post('/deletecode',data),
};

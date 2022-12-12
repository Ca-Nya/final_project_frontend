import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;
const Authorization = localStorage.getItem("Authorization") ?? "";

// axios.instance
const http = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization,
	},
});

// Get Request
export const getRequest = async ({
	method,
	url,
	throwWhenError = false,
	params,
}) => {
	try {
		const response = await http[method](url, { params });
		// console.log("getRequest response =>", response);
		return response;
	} catch (error) {
		if (throwWhenError) throw error;
	}
};

// Post/Put/Delete Request
export const request = async ({
	method,
	url,
	throwWhenError = false,
	payload,
}) => {
	try {
		const response = await http[method](url, payload);
		// console.log("Request response =>", response);
		return response;
	} catch (error) {
		// console.log("Request error =>", error);
		if (throwWhenError) throw error;
	}
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	isLoading: false,
	token: null,
};

// Sign Up POST
export const __requestSignUp = createAsyncThunk(
	"join/requestSignUp",
	async (payload, thunkAPI) => {
		try {
			console.log("payload =>", payload);
			const response = await axios.post(`${BASE_URL}/member/register`, payload);
			console.log("__requestSignUp response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__requestSignUp error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// Sign In POST
export const __requestSignIn = createAsyncThunk(
	"join/requestSignIn",
	async (payload, thunkAPI) => {
		try {
			console.log("payload =>", payload);
			const response = await axios.post(`${BASE_URL}/member/login`, payload);
			console.log("__requestSignIn response =>", response);
			const {
				status,
				headers: { authorization },
			} = response;
			const { sub } = jwt_decode(authorization);
			console.log("sub =>", sub);
			return thunkAPI.fulfillWithValue({
				statusCode: status,
				id: sub,
				token: authorization,
			});
		} catch (error) {
			console.log("__requestSignIn error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

const joinSlice = createSlice({
	name: "join",
	initialState,
	reducers: {},
	extraReducers: {
		[__requestSignUp.pending]: (state, _) => {
			console.log("__requestSignUp.pending");
			state.isLoading = true;
		},
		[__requestSignUp.fulfilled]: (state, action) => {
			console.log("__requestSignUp.fulfilled =>", action.payload);
			state.isLoading = false;
		},
		[__requestSignUp.rejected]: (state, action) => {
			console.log("__requestSignUp.rejected =>", action.payload);
			state.isLoading = false;
		},

		[__requestSignIn.pending]: (state, _) => {
			console.log("__requestSignIn.pending");
			state.isLoading = true;
		},
		[__requestSignIn.fulfilled]: (state, action) => {
			console.log("__requestSignIn.fulfilled =>", action.payload);
			state.isLoading = false;
			localStorage.setItem("jwtToken", action.payload.token);
			state.token = action.payload.token;
		},
		[__requestSignIn.rejected]: (state, action) => {
			console.log("__requestSignIn.rejected =>", action.payload);
			state.isLoading = false;
		},
	},
});

export const {} = joinSlice.actions;
export default joinSlice.reducer;

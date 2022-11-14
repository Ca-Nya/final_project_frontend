import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	token: null,
	isLoading: false,
	nickname: null,
	statusMessage: null,
	statusCode: null,
	// 로그인 여부 확인 후 변하지 않는 값
	isInitialized: null,
	isLogin: null,
	isCheckedId: false,
	isCheckedNickname: false,
	isExistId: false,
	isExistNickname: false,
	signUpStatusCode: null,
	signInStatusCode: null,
	error: null,
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
				data: { msg },
				headers: { authorization },
			} = response;
			const { aud, sub } = jwt_decode(authorization);
			console.log("aud =>", aud);

			return thunkAPI.fulfillWithValue({
				statusCode: status,
				statusMessage: msg,
				id: sub,
				nickname: aud,
				token: authorization,
			});
		} catch (error) {
			console.log("__requestSignIn error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// User Id Exist Check
export const __isIdExist = createAsyncThunk(
	"join/isIdExist",
	async (payload, thunkAPI) => {
		console.log("__isIdExist payload =>", payload);
		try {
			const memberName = payload;
			const response = await axios.get(
				`${BASE_URL}/member/name/check/${memberName}`,
			);
			console.log("__isIdExist response =>", response);
			const data = {
				statusCode: response.status,
				isExist: response.data,
			};
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			console.log("__isIdExist error =>", error);
			const {
				status,
				data: { errorMessage },
			} = error.response;
			return thunkAPI.rejectWithValue({ statusCode: status, errorMessage });
		}
	},
);

// User Nickname Exist Check
export const __isNicknameExist = createAsyncThunk(
	"join/isNicknameExist",
	async (payload, thunkAPI) => {
		console.log("__isIdExist payload =>", payload);
		try {
			const nickname = payload;
			const response = await axios.get(
				`${BASE_URL}/member/nickname/check/${nickname}`,
			);
			console.log("__isNicknameExist response =>", response);
			const data = {
				statusCode: response.status,
				isExist: response.data,
			};
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			console.log("__isNicknameExist error =>", error);
			const {
				status,
				data: { errorMessage },
			} = error.response;
			return thunkAPI.rejectWithValue({ statusCode: status, errorMessage });
		}
	},
);

const joinSlice = createSlice({
	name: "join",
	initialState,
	reducers: {
		resetNicknameCheck: (state, _) => {
			state.isCheckedNickname = false;
		},
		resetIdCheck: (state, _) => {
			state.isCheckedId = false;
		},
		resetIdExist: (state, _) => {
			state.isExistId = false;
		},
		resetNicknameExist: (state, _) => {
			state.isExistNickname = false;
		},
		resetSignUpStatus: (state, _) => {
			state.signInStatusCode = null;
		},
		resetToken: (state, _) => {
			state.token = null;
		},
		resetError: (state, _) => {
			state.error = null;
		},
	},
	extraReducers: {
		//회원가입
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
		//로그인
		[__requestSignIn.pending]: (state, _) => {
			console.log("__requestSignIn.pending");
			state.isLoading = true;
		},
		[__requestSignIn.fulfilled]: (state, action) => {
			console.log("__requestSignIn.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.isLogin = true;
			state.token = action.payload.token;
			localStorage.setItem("Authorization", action.payload.token);
			// localStorage.setItem("Refresh-Token", action.payload.refreshtoken);
			localStorage.setItem("Nickname", action.payload.nickname);
		},
		[__requestSignIn.rejected]: (state, action) => {
			console.log("__requestSignIn.rejected =>", action.payload);
			state.isLoading = false;
			state.error = action.payload;
		},
		// 아이디 중복
		[__isIdExist.pending]: (state, _) => {
			console.log("__isIdExist.pending");
			state.isLoading = true;
		},
		[__isIdExist.fulfilled]: (state, action) => {
			console.log("__isIdExist.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedId = action.payload.isExist;
			state.isExistId = false;
		},
		[__isIdExist.rejected]: (state, action) => {
			console.log("__isIdExist.rejected =>", action.payload);
			state.isLoading = false;
			if (action.payload.statusCode === 400) {
				state.isExistId = true;
			}
		},
		// 닉네임 중복
		[__isNicknameExist.pending]: (state, _) => {
			console.log("__isNicknameExist.pending");
			state.isLoading = true;
		},
		[__isNicknameExist.fulfilled]: (state, action) => {
			console.log("__isNicknameExist.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedNickname = action.payload.isExist;
			state.isExistNickname = false;
		},
		[__isNicknameExist.rejected]: (state, action) => {
			console.log("__isNicknameExist.rejected =>", action.payload);
			state.isLoading = false;
			if (action.payload.statusCode === 400) {
				state.isExistNickname = true;
			}
		},
	},
});

export const {
	resetIdCheck,
	resetNicknameCheck,
	resetIdExist,
	resetNicknameExist,
	resetSignUpStatus,
	resetToken,
	resetError,
} = joinSlice.actions;
export default joinSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import * as Sentry from "@sentry/react";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	token: null,
	isLoading: false,
	nickname: null,
	statusMessage: null,
	statusCode: null,
	memberStatus: "",
	profileImageUrl: "",
	// 로그인 여부 확인 후 변하지 않는 값
	isInitialized: null,
	profileImage: null,
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
			const response = await axios.post(`${BASE_URL}/member/register`, payload);

			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// Sign In POST
export const __requestSignIn = createAsyncThunk(
	"join/requestSignIn",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.post(`${BASE_URL}/member/login`, payload);

			const {
				status,
				data: { msg },
				headers: { authorization },
			} = response;
			const { aud, sub, memberStatus, profileImageUrl } =
				jwt_decode(authorization);
			const jwtDecode = jwt_decode(authorization);

			return thunkAPI.fulfillWithValue({
				statusCode: status,
				statusMessage: msg,
				id: sub,
				nickname: aud,
				token: authorization,
				memberStatus,
				profileImageUrl,
			});
		} catch (error) {
			Sentry.captureException(error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// User Id Exist Check
export const __isIdExist = createAsyncThunk(
	"join/isIdExist",
	async (payload, thunkAPI) => {
		try {
			const memberName = payload;
			const response = await axios.get(
				`${BASE_URL}/member/name/check/${memberName}`,
			);

			const data = {
				statusCode: response.status,
				isExist: response.data,
			};
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			const {
				status,
				data: { errorMessage },
			} = error.response;
			Sentry.captureException(error);
			return thunkAPI.rejectWithValue({ statusCode: status, errorMessage });
		}
	},
);

// User Nickname Exist Check
export const __isNicknameExist = createAsyncThunk(
	"join/isNicknameExist",
	async (payload, thunkAPI) => {
		try {
			const nickname = payload;
			const response = await axios.get(
				`${BASE_URL}/member/nickname/check/${nickname}`,
			);

			const data = {
				statusCode: response.status,
				isExist: response.data,
			};
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			const {
				status,
				data: { errorMessage },
			} = error.response;
			Sentry.captureException(error);
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
		editProfileImage: (state, action) => {
			state.profileImage = action.payload;
		},
	},
	extraReducers: {
		//회원가입
		[__requestSignUp.pending]: (state, _) => {
			state.isLoading = true;
		},
		[__requestSignUp.fulfilled]: (state, action) => {
			state.isLoading = false;
		},
		[__requestSignUp.rejected]: (state, action) => {
			state.isLoading = false;
		},
		//로그인
		[__requestSignIn.pending]: (state, _) => {
			state.isLoading = true;
		},
		[__requestSignIn.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.isLogin = true;
			state.token = action.payload.token;
			state.profileImage = action.payload.profileImageUrl;
			localStorage.setItem("Authorization", action.payload.token);
			// localStorage.setItem("Refresh-Token", action.payload.refreshtoken);
			localStorage.setItem("Nickname", action.payload.nickname);
			localStorage.setItem("memberStatus", action.payload.memberStatus);
			localStorage.setItem("profileImageUrl", action.payload.profileImageUrl);
		},
		[__requestSignIn.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// 아이디 중복
		[__isIdExist.pending]: (state, _) => {
			state.isLoading = true;
		},
		[__isIdExist.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedId = action.payload.isExist;
			state.isExistId = false;
		},
		[__isIdExist.rejected]: (state, action) => {
			state.isLoading = false;
			if (action.payload.statusCode === 400) {
				state.isExistId = true;
			}
		},
		// 닉네임 중복
		[__isNicknameExist.pending]: (state, _) => {
			state.isLoading = true;
		},
		[__isNicknameExist.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedNickname = action.payload.isExist;
			state.isExistNickname = false;
		},
		[__isNicknameExist.rejected]: (state, action) => {
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
	editProfileImage,
} = joinSlice.actions;
export default joinSlice.reducer;

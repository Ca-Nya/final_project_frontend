import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const authorization = localStorage.getItem("Authorization");

const initialState = {
	ment: null,
	mentList: [],
	isLoading: false,
	error: null,
};

export const __addComment = createAsyncThunk(
	"addComment",
	async (payload, thunkAPI) => {
        console.log("payload=>", payload);
		try {
			const response = await axios.post(
				`${BASE_URL}/auth/comment/3/create`,
				payload,
				{
					headers: {
						authorization,
					},
				},
			);
			return thunkAPI.fulfillWithValue(response);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducer: {},
	extraReducers: {},
});

export default commentSlice.reducer;

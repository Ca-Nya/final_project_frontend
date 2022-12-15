import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	profile: true,
};

const mypgSlice = createSlice({
	name: "mypg",
	initialState,
	reducers: {
		resetprofile: (state, _) => {
			state.profile = false;
		},		
	},
	extraReducers: {		
	},
});

export const {
	resetprofile,
} = mypgSlice.actions;
export default mypgSlice.reducer;


import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";
import mypg from "../modules/mypg/mypgSlice"

const store = configureStore({
	reducer: {
		join,
		mypg,
	},
});

export default store;

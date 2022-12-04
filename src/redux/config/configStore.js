import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";

const store = configureStore({
	reducer: {
		join,
	},
});

export default store;

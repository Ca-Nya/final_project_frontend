import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";
import comment from "../modules/comment/commentSlice"

const store = configureStore({
	reducer: {
		join,
		comment,
	},
});

export default store;

import Router from "./shared/Router";
import GlobalStyles from "./GlobalStyles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetToken } from "../src/redux/modules/join/joinSlice";
import { Suspense } from "react"

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem("Authorization")) {
			dispatch(resetToken());
		}
	}, [dispatch]);
	return (
		<>
		<Suspense fallback={<div>로딩중</div>}>
		<GlobalStyles />
			<Router />
		</Suspense>
		</>
	);
}

export default App;

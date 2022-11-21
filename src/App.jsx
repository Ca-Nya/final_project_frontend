import Router from "./shared/Router";
import GlobalStyles from "./GlobalStyles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetToken } from "../src/redux/modules/join/joinSlice";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem("Authorization")) {
			dispatch(resetToken());
		}
	}, [dispatch]);
	return (
		<>
			<Suspense fallback={<div>Loading</div>}>
				{/* <ErrorBoundary FallbackComponent={<div>에러발생</div>}> */}
				<GlobalStyles />
				<Router />
				{/* </ErrorBoundary> */}
			</Suspense>
		</>
	);
}

export default App;

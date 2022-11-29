import { GlobalStyles, Router } from "./shared";
import { resetToken } from "../src/redux/modules/join/joinSlice";
import { theme } from "./themes";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem("Authorization")) {
			dispatch(resetToken());
		}
	}, [dispatch]); // 의존성

	return (
		<>
			<Suspense fallback={<div>Loading</div>}>
				{/* <ErrorBoundary FallbackComponent={<div>에러발생</div>}> */}
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Router />
				</ThemeProvider>
				{/* </ErrorBoundary> */}
			</Suspense>
		</>
	);
}

export default App;

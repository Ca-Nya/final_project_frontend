// 왜 안될까아
import { Image, Box, Flex } from "../src/components";
import { GlobalStyles, Router } from "./shared";
import { resetToken } from "../src/redux/modules/join/joinSlice";
import { theme } from "./themes";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
// 로딩 스피너
import spinner from "../src/assets/icons/spinner.gif";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem("Authorization")) {
			dispatch(resetToken());
		}
	}, [dispatch]); // 의존성

	return (
		<>
			<ThemeProvider theme={theme}>
				<Suspense
					fallback={
						<Box variant="spinner-wrap">
							<Flex jc="center" ai="center">
								<Image src={spinner} alt="로딩중" variant="spinner" />
							</Flex>
						</Box>
					}
				>
					{/* <ErrorBoundary FallbackComponent={<div>에러발생</div>}> */}
					<GlobalStyles />
					<Router />
					{/* </ErrorBoundary> */}
				</Suspense>
			</ThemeProvider>
		</>
	);
}

export default App;

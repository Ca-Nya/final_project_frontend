import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import SignInPage from "../pages/join/";
import SignUpPage from "../components/join/SignUpForm";
import { CafeReview } from "../components/cafe_review";
import { DetailPost } from "../components/detail";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/join" element={<SignInPage />} />
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/write/:id" element={<CafeReview />} />
					<Route path="/detail" element={<DetailPost />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import SignInPage from "../pages/join/";
import SignUpPage from "../components/join/SignUpForm";
import { CafeReview } from "../components/cafe_review";
import { DetailPost } from "../components/detail";
import { MyPage } from "../components/my_page";

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
					<Route path="/mypage" element={<MyPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import SignInPage from "../pages/join/";
import SignUpPage from "../components/join/SignUpForm";
import DetailPage from "../pages/detail";
import { CafeReview } from "../components/cafe_review";
import { DetailPost } from "../components/detail";
import { MyPage } from "../components/my_page";
import { DetailPost, DetailEditPost } from "../components/detail";


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
					<Route path="/detail" element={<DetailPage />}>
						<Route path="post" element={<DetailPost />} />
						<Route path="edit" element={<DetailEditPost />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

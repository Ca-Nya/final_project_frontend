import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainListPage from "../pages/mainlist/MainListPage";
import SignInPage from "../pages/join/";
import SignUpPage from "../components/join/SignUpForm";
import DetailPage from "../pages/detail";
import { CafeReview } from "../components/cafe_review";
import { DetailPost, DetailEditPost } from "../components/detail";
import { MyPage } from "../components/my_page";
import LikedByFields from "../layout/likedByFields";
import LikedByOveralls from "../layout/likedByOveralls";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainListPage />} />
					<Route path="/write/:id" element={<CafeReview />} />
					<Route path="/detail" element={<DetailPage />}>
						<Route path="post/:id" element={<DetailPost />} />
						<Route path="edit/:id" element={<DetailEditPost />} />
					</Route>
					<Route path="overalls" element={<LikedByOveralls />}></Route>
					<Route path="fields" element={<LikedByFields />}></Route>
					<Route path="/join" element={<SignInPage />} />
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/mypage" element={<MyPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

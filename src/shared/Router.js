import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainListPage from "../pages/mainlist";
import SignInPage from "../pages/join/";
import SignUpPage from "../components/join/SignUpForm";
import DetailPage from "../pages/detail";
import { CafeReview } from "../components/cafe_review";
import { DetailPost, DetailEditPost } from "../components/detail";
import LikedByFields from "../layout/likedByFields";
import LikedByOveralls from "../layout/likedByOveralls";
import { MyBoard, MyComment, MyLike, MyPage } from "../components/my_page";

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
					<Route path="/myboard" element={<MyBoard />} />
					<Route path="/mycomment" element={<MyComment />} />
					<Route path="/mylike" element={<MyLike />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

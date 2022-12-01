import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main";
import LikedByFieldsLayout from "../layout/likedByFields";
import LikedByOverallsLayout from "../layout/likedByOveralls";
import MyPageLayout from "../layout/mypage";
import MainPage from "../pages/main";
import CafeReviewPage from "../pages/cafeReview";
import DetailPage from "../pages/detail";
import { SignInPage, SignUpPage } from "../pages/join";
import { DetailPost, DetailEditPost } from "../container/detail";
import LikedByFieldList from "../container/likedByFieldList";
import LikedByOverallList from "../container/likedByOverallList";
import { MyBoard, MyComment, MyLike, MyAll, MyAllPrac, MyBoardPrac, MyLikePrac } from "../container/myPage";


const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="" element={<MainPage />} />
						<Route path="/write/:id" element={<CafeReviewPage />} />
						<Route path="/detail" element={<DetailPage />}>
							<Route path="post/:id" element={<DetailPost />} />
							<Route path="edit/:id" element={<DetailEditPost />} />
						</Route>
						<Route path="/overalls" element={<LikedByOverallsLayout />}>
							<Route path=":category" element={<LikedByOverallList />} />
						</Route>
						<Route path="/fields" element={<LikedByFieldsLayout />}>
							<Route path=":category" element={<LikedByFieldList />} />
						</Route>
					</Route>
					<Route path="/join" element={<SignInPage />} />
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/mypage" element={<MyPageLayout />}>
						<Route path="myall" element={<MyAllPrac />} />
						<Route path="myboard" element={<MyBoardPrac />} />
						<Route path="mycomment" element={<MyComment />} />
						<Route path="mylike" element={<MyLikePrac />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

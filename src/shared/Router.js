import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main";
import LikedByFieldsLayout from "../layout/likedByFields";
import LikedByOverallsLayout from "../layout/likedByOveralls";
import MyPageLayout from "../layout/mypage";
import MainPage from "../pages/main";
import CafeReviewPage from "../pages/cafe_review";
import DetailPage from "../pages/detail";
import { SignInPage, SignUpPage } from "../pages/join/";
import { DetailPost, DetailEditPost } from "../components/detail";
import { LikedByFields } from "../components/likedByFields";
import { LikedByOveralls } from "../components/likedByOveralls";
import { MyBoard, MyComment, MyLike, MyAll } from "../components/my_page";

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
							<Route path=":category" element={<LikedByOveralls />} />
						</Route>
						<Route path="/fields" element={<LikedByFieldsLayout />}>
							<Route path=":category" element={<LikedByFields />} />
						</Route>
					</Route>
					<Route path="/join" element={<SignInPage />} />
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/mypage" element={<MyPageLayout />}>
						<Route path="myall" element={<MyAll />} />
						<Route path="myboard" element={<MyBoard />} />
						<Route path="mycomment" element={<MyComment />} />
						<Route path="mylike" element={<MyLike />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;

// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<MainLayout />} />
//   <Route path="/write/:id" element={<CafeReview />} />
//   <Route path="/detail" element={<DetailPage />}>
//     <Route path="post/:id" element={<DetailPost />} />
//     <Route path="edit/:id" element={<DetailEditPost />} />
//   </Route>
//   <Route path="/overalls" element={<LikedByOverallsLayout />}>
//     <Route path=":category" element={<LikedByOveralls />} />
//   </Route>
//   <Route path="/fields" element={<LikedByFieldsLayout />}>
//     <Route path=":category" element={<LikedByFields />} />
//   </Route>
//   <Route path="/join" element={<SignInPage />} />
//   <Route path="/register" element={<SignUpPage />} />
//   <Route path="/mypage" element={<MyPageLayout />}>
//     <Route path="myall" element={<MyAll />} />
//     <Route path="myboard" element={<MyBoard />} />
//     <Route path="mycomment" element={<MyComment />} />
//     <Route path="mylike" element={<MyLike />} />
//   </Route>
// </Routes>
// </BrowserRouter>

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Default, Mobile } from "../assets/mediaQuery";
import MainLayout from "../layout/main";
import LikedByFieldsLayout from "../layout/likedByFields";
import LikedByOverallsLayout from "../layout/likedByOveralls";
import MainPage from "../pages/main";
import CafeReviewPage from "../pages/cafeReview";
import DetailPage from "../pages/detail";
import { SignInPage, SignUpPage } from "../pages/join";
import { DetailPost, DetailEditPost } from "../container/detail";
import LikedByFieldList from "../container/likedByFieldList";
import LikedByOverallList from "../container/likedByOverallList";
import MyPages from "../pages/mypage";
import {
	MyBoard,
	MyComment,
	MyLike,
	MyAll,
	MyComuBoard,
	MyComuComment,
} from "../container/myPage";
// import { Chat } from "../container/chat";
import {
	ComuList,
	ComuDetail,
	ComuPost,
	ComuEdit,
} from "../container/community";
import { GlobalErrorHandler } from "../container/globalException";

const Router = () => {
	return (
		<>
			<Default>
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
							<Route path="/mypage" element={<MyPages />}>
								<Route path="myall" element={<MyAll />} />
								<Route path="myboard" element={<MyBoard />} />
								<Route path="mycomment" element={<MyComment />} />
								<Route path="mylike" element={<MyLike />} />
								<Route path="mycommunityboard" element={<MyComuBoard />} />
								<Route path="mycommunitycomment" element={<MyComuComment />} />
							</Route>
							<Route path="/community" element={<ComuList />} />
							<Route path="/community/:id" element={<ComuDetail />} />
							<Route path="/post" element={<ComuPost />} />
							<Route path="/edit/:id" element={<ComuEdit />} />
						</Route>
						<Route path="/join" element={<SignInPage />} />
						<Route path="/register" element={<SignUpPage />} />
						{/* <Route path="/chat" element={<Chat />} /> */}
						<Route path="*" element={<GlobalErrorHandler />} />
					</Routes>
				</BrowserRouter>
			</Default>
			<Mobile>
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

							<Route path="/community" element={<ComuList />} />
							<Route path="/community/:id" element={<ComuDetail />} />
							<Route path="/post" element={<ComuPost />} />
							<Route path="/edit/:id" element={<ComuEdit />} />
						</Route>
						<Route path="/mypage" element={<MyPages />}>
							<Route path="myall" element={<MyAll />} />
							<Route path="myboard" element={<MyBoard />} />
							<Route path="mycomment" element={<MyComment />} />
							<Route path="mylike" element={<MyLike />} />
							<Route path="mycommunityboard" element={<MyComuBoard />} />
							<Route path="mycommunitycomment" element={<MyComuComment />} />
						</Route>
						<Route path="/join" element={<SignInPage />} />
						<Route path="/register" element={<SignUpPage />} />
						{/* <Route path="/chat" element={<Chat />} /> */}
						<Route path="*" element={<GlobalErrorHandler />} />
					</Routes>
				</BrowserRouter>
			</Mobile>
		</>
	);
};

export default Router;

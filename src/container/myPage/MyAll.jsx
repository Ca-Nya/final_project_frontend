import { Box, Image, Flex, Strong, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../assets/icons/spinner.gif";
import All from "./all";

const MyAll = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;

	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//내가좋아요한 게시물 get요청
	const {
		data: myContent,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ["getMyPage"],
		queryFn: async () => {
			try {
				const response = await axios.get(`${BASE_URL}/member/auth/mypage/all`, {
					headers: {
						authorization,
					},
				});
				console.log("response =====>", response.data);
				return response.data;
			} catch (error) {
				console.log("error =>", error);
				return error;
			}
		},
		suspense: true,
	});

	console.log("MyPage=>", myContent);
	console.log("isError =>", isError, "isLoading =>", isLoading);

	const {
		recentlyMyBoardList,
		recentlyMyCommentList,
		recentlyMyHeartBoardList,
		recentlyMyCommunityList,
		recentlyMyCommunityCommentList,
	} = myContent;

	console.log("MyPagerecentlyMyBoardList=>", recentlyMyBoardList);

	if (isLoading)
		return (
			<Box>
				<Image src={Spinner} />
			</Box>
		);

	if (isError)
		return (
			<>
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">
							에러입니다.😭 빠른 시일 내에 해결하겠습니다.
						</Strong>
						<Button onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
			</>
		);

	return (
		<Box variant="mypage-category">
			<All
				recentlyMyBoardList={recentlyMyBoardList}
				recentlyMyCommentList={recentlyMyCommentList}
				recentlyMyHeartBoardList={recentlyMyHeartBoardList}
				recentlyMyCommunityList={recentlyMyCommunityList}
				recentlyMyCommunityCommentList={recentlyMyCommunityCommentList}
				spinner={Spinner}
				navigate={navigate}
			/>
		</Box>
	);
};

export default MyAll;

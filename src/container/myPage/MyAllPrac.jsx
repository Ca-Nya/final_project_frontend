import { Box, Image, Text, Margin, Flex } from "../../components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../assets/icons/spinner.gif";
import All from "./all"

const MyAllPrac = () => {
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
	} = myContent;

	console.log("MyPagerecentlyMyBoardList=>", recentlyMyBoardList);

	if (isLoading)
		return (
			<Box>
				<Image src={Spinner} />
			</Box>
		);
	if (isError) return <Box>에러입니다.</Box>;

	return (
		<Box variant="mypage-category">
            <All 
            recentlyMyBoardList={recentlyMyBoardList}
            recentlyMyCommentList={recentlyMyCommentList}
            recentlyMyHeartBoardList={recentlyMyHeartBoardList}
            spinner={Spinner}
            navigate={navigate}
            />
		</Box>
	);
};

export default MyAllPrac;

import MyComment from "./MyComment";
import MYBoard from "./MyBoard";
import MyLike from "./MyLike";
import { Box, Input, Button, Form } from "../../common";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MyPage = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const navigate = useNavigate();

	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	//내가좋아요한 게시물 get요청
	// const { data: myContent, isLoading, isError } 
	const  { data: myContent, isError, isLoading } = useQuery({
		queryKey: ["getMyPage"],
		queryFn: async () => {
			try {
				const response = await axios.get(`${BASE_URL}/member/auth/mypage/all`, {
					headers: {
						authorization,
					},
				});
				console.log("response =====>", response.data)
				return response.data;
			} catch (error) {
				console.log("error =>", error)
			}
		},
		suspense: true,		
	});

	console.log("MyPage=>", myContent);

	const {
		recentlyMyBoardList,
		recentlyMyCommentList,
		recentlyMyHeartBoardList,
		memberBoardCount,
		memberCommentCount,
		memberHeartCount,
		memberProfileImage,
	} = myContent;

	console.log("MyPagerecentlyMyBoardList=>", recentlyMyBoardList);

	if (isLoading) return <div>로딩중</div>
	if (isError) return <div>에러</div>

	return (
		<Box>
			 <Box>
				<img src={memberProfileImage} alt={memberProfileImage}></img>
				<p>닉네임: {nickname}</p>
				<p>총 게시글 수: {memberBoardCount}</p>
				<p>총 댓글 수: {memberCommentCount}</p>
				<p>총 좋아요 한 수: {memberHeartCount}</p>	
			</Box>
			<Box>
				<span
					onClick={() => {
						navigate("/myboard");
					}}
				>
					내가쓴글/{" "}
				</span>
				<span
					onClick={() => {
						navigate("/mylike");
					}}
				>
					좋아요/{" "}
				</span>
				<span
					onClick={() => {
						navigate("/mycomment");
					}}
				>
					작성댓글/{" "}
				</span>
			</Box>
			<Box>
				<p>모두보기</p>
			</Box>
			<Box>
				<p>내가 쓴 글</p>
				{recentlyMyBoardList?.map(item => {
					return (
						<Box key={item.boardId}>
							<img src={item.imageList[0].imageUrl} alt={item.boardTitle}></img>
							<p>{item.boardTitle}</p>
						</Box>
					);
				})}
			</Box>
			<Box>
				<p>좋아요 한 글</p>
				{recentlyMyHeartBoardList?.map(item => {
					return (
						<Box key={item.boardId}>
							<img src={item.imageList[0].imageUrl} alt={item.boardTitle}></img>
							<p>{item.boardTitle}</p>
						</Box>
					);
				})}
			</Box>
			<Box>
				<p>내가 작성한 댓글</p>
				{recentlyMyCommentList?.map(item => {
					return (
						<Box key={item.commentId}>
							<p>{item.commentContent}</p>
							<p>{item.boardTitle}</p>
						</Box>
					);
				})}
			</Box> 
		</Box>
	);
};

export default MyPage;

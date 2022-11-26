import { Box, Image, Text, Margin, Flex } from "../../common";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileImage } from "../../querys/myPage";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
import Spinner from "../../assets/icons/spinner.gif";

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
		refetch,
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
	if (isError) return <Box>에러</Box>;

	return (
		<Box>
			<Box>
				<Margin margin="30px 3px 10px 3px">
					<Box variant="guide">
						<Text variant="title">내가 쓴 글 ✍🏻</Text>
						<Text
							variant="add"
							onClick={() => {
								navigate(`/mypage/myboard`);
							}}
						>
							더보기
						</Text>
					</Box>
				</Margin>
				<Box variant="guide">
					{recentlyMyBoardList?.map(item => {
						return (
							<Box key={item.boardId}>
								<Box>
									<Image
										variant="mypage-post"
										src={item.imageList[0].imageUrl}
										alt={item.boardTitle}
									></Image>
									<Margin margin="8px auto 0 auto">
										<Text
											variant="all-title"
											onClick={() => {
												navigate(`/detail/post/${item.boardId}`);
											}}
										>
											{item.boardTitle}
										</Text>
									</Margin>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Box>
			<Box>
				<Margin margin="60px 0 10px 0">
					<Box variant="guide">
						<Text variant="title">좋아요 한 글 ❣️ </Text>
						<Text
							variant="add"
							onClick={() => {
								navigate(`/mypage/mylike`);
							}}
						>
							더보기
						</Text>
					</Box>
				</Margin>
				<Box variant="guide">
					{recentlyMyHeartBoardList?.map(item => {
						return (
							<Box key={item.boardId}>
								<Box key={item.boardId}>
									<Image
										variant="mypage-post"
										src={item.imageList[0].imageUrl}
										alt={item.boardTitle}
									></Image>
									<Margin margin="8px auto 0 auto">
										<Text
											variant="all-title"
											onClick={() => {
												navigate(`/detail/post/${item.boardId}`);
											}}
										>
											{item.boardTitle}
										</Text>
									</Margin>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Box>
			<Box>
				<Margin margin="60px 0 10px 0">
					<Box variant="guide">
						<Text variant="title">작성 댓글 📋</Text>
						<Text
							variant="add"
							onClick={() => {
								navigate(`/mypage/mycomment`);
							}}
						>
							더보기
						</Text>
					</Box>
				</Margin>

				{recentlyMyCommentList?.map(item => {
					return (
						<Box key={item.commentId}>
							<Margin margin="0 0 10px 0">
								<Box variant="comment-box" key={item.commentId}>
									<Margin margin="26px 22px 0 22px">
										<Box variant="guide">
											<Flex jc="space-between">
												<Text variant="comment">{item.commentContent}</Text>
												<Text variant="comment-date">
													{item.commentCreatedAt}
												</Text>
											</Flex>
										</Box>
									</Margin>
									<Margin margin="10px 0 0 22px">
										<Text
											variant="comment-title"
											onClick={() => {
												navigate(`/detail/post/${item.boardId}`);
											}}
										>
											{item.boardTitle}
										</Text>
									</Margin>
								</Box>
							</Margin>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default MyAll;

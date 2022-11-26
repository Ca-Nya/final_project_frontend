import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
import { Box, Button, Image, Text, Margin, Flex } from "../../common";
import Edit from "../../assets/icons/edit.png";
import Delete from "../../assets/icons/delete.png";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyBoard = () => {
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//내가쓴게시물 get요청
	const { data, status } = useQuery(
		["getMyBoard"],
		async () => {
			const response = await axios.get(
				`${BASE_URL}/member/auth/mypage/boards`,
				{
					headers: {
						authorization,
					},
				},
			);
			return response.data;
		},
		{
			if(isError) {
				alert("내가 작성한 게시물 불러오기 실패");
			},
		},
	);
	console.log("MyBoard=>", data);
	// 마이페이지 게시글 삭제 Hook
	const { mutate: deletePostMutate } = useDeleteDetailPost();
	// 마이페이지 게시글 삭제 핸들러
	const handelDeletePost = item => () => {
		deletePostMutate(item.boardId, {
			onSuccess: (data, variables, context) => {
				alert("삭제 완료되었습니다!");
			},
			onError: (error, variables, context) => {
				alert("삭제를 실패했습니다");
			},
		});
	};
	// 마이페이지 게시글 수정 핸들러
	const handleEditPost = item => () => {
		navigate(`/detail/edit/${item.boardId}`);
	};

	return (
		<Box>
			<Margin margin="30px 3px 10px 3px">
				<Box variant="mypage-nav">
					<Text variant="title">내가 쓴 글 ✍🏻</Text>
				</Box>
			</Margin>

			{data && data?.length > 0 ? (
				<Box>
					{data?.map(item => {
						return (
							<Box variant="board-box" key={item.boardId}>
								<Margin margin="30px 3px 10px 3px">
									<Box variant="guide">
										<Flex>
											<Image
												variant="myboard-post"
												src={item.imageList[0].imageUrl}
												alt={item.boardTitle}
											/>
											<Box>
												<Flex fd="column">
													<Box variant="board-smaillbox">
														<Margin margin="10px 0 0 25px">
															<Text
																variant="board-title"
																onClick={() => {
																	navigate(`/detail/post/${item.boardId}`);
																}}
															>
																{item.boardTitle}
															</Text>
															<Margin margin="20px 0 0 5px">
																<Text variant="board-content">
																	{item.boardContent}
																</Text>
															</Margin>
														</Margin>
													</Box>
													<Margin margin="10px 0 5px 25px">
														<Box variant="board-inbox">
															<Flex jc="space-between">
																<Text variant="comment-date">
																	{item.createdAt}
																</Text>

																<Box variant="board-minibutton">
																	<Flex gap="10px">
																		<Button
																			variant="mypage"
																			onClick={handleEditPost(item)}
																		>
																			수정
																			<Image
																				variant="profile-edit"
																				src={Edit}
																			/>
																		</Button>
																		<Button
																			variant="mypage"
																			onClick={handelDeletePost(item)}
																		>
																			삭제
																			<Image
																				variant="profile-edit"
																				src={Delete}
																			/>
																		</Button>
																	</Flex>
																</Box>
															</Flex>
														</Box>
													</Margin>
												</Flex>
											</Box>
										</Flex>
									</Box>
								</Margin>

								{/* {item.commentContent && item.commentContent ? (
									<li>댓글:{item.commentContent}</li>
								) : (
									<li>
										<p>댓글이 없습니다.</p>
									</li>
								)} */}
								{/* <li>총댓글갯수:{item.commentCount}</li> */}
								{/* <li>주소:{item.address}</li> */}
								{/* <li>평점:{item.totalRating}</li> */}
							</Box>
						);
					})}
				</Box>
			) : (
				<Box>
					<Text variant="comment"> 작성한 게시물이 없습니다.</Text>
				</Box>
			)}
		</Box>
	);
};

export default MyBoard;

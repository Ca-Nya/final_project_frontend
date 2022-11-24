import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Input,
	Button,
	Image,
	Text,
	Label,
	Margin,
	Flex,
} from "../../common";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyLike = () => {
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	//내가좋아요한 게시물 get요청
	const { data, status } = useQuery(
		["getMyBoard"],
		async () => {
			const response = await axios.get(
				`${BASE_URL}/member/auth/mypage/heart-boards`,
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
				alert("내가 좋아요한 게시물 불러오기 실패");
			},
		},
	);
	console.log("MyLike=>", data);
	return (
		<Box>
			<Margin margin="30px 3px 10px 3px">
				<Box variant="mypage-nav">
					<Text variant="title">좋아요 한 글 ❣️ </Text>
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
													<Margin margin="10px 0 5px 490px">
														<Box variant="board-inbox">
															<Flex gap="20px">
																<Text variant="comment-date">
																	{item.createdAt}
																</Text>
																<Text>💬 {item.commentCount}</Text>
																<Text>⭐️ {item.totalRating}</Text>
																<Text>❤️ {item.heartCount}</Text>
															</Flex>
														</Box>
													</Margin>
												</Flex>
											</Box>
										</Flex>
									</Box>
								</Margin>
							</Box>
						);
					})}
				</Box>
			) : (
				<Box>
					<Text variant="comment"> 좋아요한 게시물이 없습니다.</Text>
				</Box>
			)}
		</Box>
	);
};

export default MyLike;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Input, Button, Form } from "../../common";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyBoard = () => {
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

	return (
		<ul>
			<li>
				<h1>{nickname}님이 작성하신 게시물입니다.</h1>
			</li>
			{data && data?.length > 0 ? (
				<Box>
					{data?.map(item => {
						return (
							<Box key={item.boardId}>
								<li>
									<img src={item.imageList[0].imageUrl} alt={item.boardTitle} />
								</li>
								<li>제목:{item.boardTitle}</li>
								<li>내용:{item.boardContent}</li>
								{item.commentContent && item.commentContent ? (
									<li>댓글:{item.commentContent}</li>
								) : (
									<li>
										<p>댓글이 없습니다.</p>
									</li>
								)}
								<li>총댓글갯수:{item.commentCount}</li>
								<li>주소:{item.address}</li>
								<li>평점:{item.totalRating.toFixed(1)}</li>
							</Box>
						);
					})}
				</Box>
			) : (
				<li>
					<p> 작성한 게시물이 없습니다.</p>
				</li>
			)}
		</ul>
	);
};

export default MyBoard;

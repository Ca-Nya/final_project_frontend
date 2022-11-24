import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
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
								<Box>
									<Image
										variant="myboard-post"
										src={item.imageList[0].imageUrl}
										alt={item.boardTitle}
									/>
								</Box>
								<Text>제목:{item.boardTitle}</Text>
								<Text>내용:{item.boardContent}</Text>
								{item.commentContent && item.commentContent ? (
									<li>댓글:{item.commentContent}</li>
								) : (
									<li>
										<p>댓글이 없습니다.</p>
									</li>
								)}
								<li>총댓글갯수:{item.commentCount}</li>
								<li>주소:{item.address}</li>
								<li>평점:{item.totalRating}</li>
								<Button onClick={handleEditPost(item)}>수정</Button>
								<Button onClick={handelDeletePost(item)}>삭제</Button>
							</Box>
						);
					})}
				</Box>
			) : (
				<li>
					<p> 작성한 게시물이 없습니다.</p>
				</li>
			)}
		</Box>
	);
};

export default MyBoard;

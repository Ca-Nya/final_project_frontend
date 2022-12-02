import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
import { Box } from "../../components";
import Board from "./board";
const BASE_URL = process.env.REACT_APP_SERVER;

const MyBoard = () => {
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
    
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
			<Board
				data={data}
				navigate={navigate}
				onDeletePost={handelDeletePost}
				onEditPost={handleEditPost}
			/>
		</Box>
	);
};

export default MyBoard;


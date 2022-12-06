import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDeleteComuPost } from "../../querys/community";
import axios from "axios";
import { Box } from "../../components";
import ComuBoard from "./comuBoard";

const MyComuBoard = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//queryClient 선언하기
	const queryClient = useQueryClient();

	//내가쓴게시물 get요청
	const { data, status } = useQuery(
		["getMyComuBoard"],
		async () => {
			const response = await axios.get(
				`${BASE_URL}/member/auth/mypage/communities`,
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
	console.log("MyComuBoard=>", data);

	//커뮤게시글 삭제하기 delete쿼리요청
	const { mutate: deleteComuPostMutate } = useDeleteComuPost();
	
  //커뮤게시글 삭제하기 
	const handleRemove = item => () => {
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			deleteComuPostMutate(item.communityId, {
				onSuccess: (data, variables, context) => {
					alert("삭제 완료되었습니다!");
				},
				onError: (error, variables, context) => {
					alert("삭제를 실패했습니다");
				},
			});
		} else {
			alert("취소합니다.");
		}
	};

	// 마이페이지 커뮤니티게시글 수정 핸들러
	const handleEditComuPost = item => () => {
		navigate(`/edit/${item.communityId}`);
	};

	return (
		<ComuBoard
			data={data}
			navigate={navigate}
			onDeleteComuPost={handleRemove}
			onEditComuPost={handleEditComuPost}
		/>
	);
};

export default MyComuBoard;

import {
	QueryClient,
	useMutation,
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { Box, Input, Button, Form } from "../../common";
import { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentList = () => {
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//수정여부 스테이트
	const [edit, setEdit] = useState(false);
	//수정코멘트 스테이트
	const [editComment, setEditComment] = useState("");
	//수정할ID 스테이트
	const [editId, setEditId] = useState(null);
	//댓글 리스트 get요청 react-query
	const { data, status } = useQuery(["getComments"], async () => {
		const response = await axios.get(`${BASE_URL}/get/comments`);
		return response.data;
	});
	console.log("CommentList=>", data);

	//댓글 삭제하기 delete요청
	const delMutation = useMutation(commentId =>
		axios.delete(`${BASE_URL}/auth/comment/${commentId.commentId}/delete`, {
			headers: {
				authorization,
			},
		}),
	);

	//댓글 수정하기 put요청
	const editMutation = useMutation(commentId =>
		axios.put(
			`${BASE_URL}/auth/comment/${commentId.commentId}/update`,
			commentId.commentContent,
			{
				headers: {
					authorization,
				},
			},
		),
	);

	//댓글 삭제하기 이벤트핸들러
	const handleRemove = (commentId, e) => {
		e.preventDefault();
		console.log("commentId=>", commentId);
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			alert("삭제되었습니다.");
			delMutation.mutate({ commentId });
		} else {
			alert("취소합니다.");
		}
	};

	//댓글 수정하기 이벤트핸들러
	const handleEdit = (commentId, e) => {
		e.preventDefault();
		editMutation.mutate({
			commentId: commentId,
			commentContent: editComment,
		});
	};

	return (
		<Box>
			{data?.map(item => {
				return (
					<>
						{item.memberNickname === nickname ? (
							<>
								<p key={item.commentId}>
									{item.memberNickname}님: {item.commentContent}
								</p>
								<Button>수정</Button>
								<Button>삭제</Button>
							</>
						) : (
							<p key={item.commentId}>
								{item.memberNickname}님: {item.commentContent}
							</p>
						)}
					</>
				);
			})}
		</Box>

		// <Box>
		// 	{data?.map(item => {
		// 		return (
		// 			<Box key={item.commentId}>
		// 				{item.memberNickname === nickname ? (
		// 					<Box key={item.commentId}>
		// 						<p>
		// 							{item.memberNickname}님:
		//               <Input
		// 									type="text"
		// 									name="commentContent"
		// 									defaultValue={item?.commentContent}
		// 									onChange={e => {
		// 										const editComment = e.target.value;
		// 										setEditComment(editComment);
		// 										setEditId(item.commentId);
		// 									}}
		// 								/>
		//               {/* {item.commentContent} */}
		// 						</p>
		// 						{edit && item?.commentId ? (
		// 							<>
		// 								{/* <Input
		// 									type="text"
		// 									name="commentContent"
		// 									defaultValue={item?.commentContent}
		// 									onChange={e => {
		// 										const editComment = e.target.value;
		// 										setEditComment(editComment);
		// 										setEditId(item.commentId);
		// 									}}
		// 								/> */}
		// 								<Button onClick={e => handleEdit(item.commentId, e)}>
		//                   {item.commentId}
		// 									완료
		// 								</Button>
		// 								<Button>삭제</Button>
		// 							</>
		// 						) : (
		// 							<>
		// 								<Button
		// 									onClick={() => {
		// 										setEdit(!edit);
		// 									}}
		// 								>
		// 									수정
		// 								</Button>
		// 								<Button onClick={e => handleRemove(item.commentId, e)}>
		// 									삭제
		// 								</Button>
		// 							</>
		// 						)}
		// 					</Box>
		// 				) : (
		// 					<p key={item.commentId}>
		// 						{item.memberNickname}님: {item.commentContent}
		// 					</p>
		// 				)}
		// 			</Box>
		// 		);
		// 	})}
		// </Box>
	);
};

export default CommentList;

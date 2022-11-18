import { useEffect, useState } from "react";
import { Box, Input, Button, Form } from "../../common";
import {
	QueryClient,
	useMutation,
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyCommentEdit = ({ comment }) => {
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	//수정여부 스테이트
	const [edit, setEdit] = useState(false);

	//수정코멘트 스테이트
	const [editComment, setEditComment] = useState("");

	//queryClient 선언하기
	const queryClient = useQueryClient();
	// 댓글 수정하기 put요청
	const {
		mutate: editMutation,
		status,
		data,
	} = useMutation(
		async commentEdit => {
			const response = await axios.put(
				`${BASE_URL}/auth/comment/${commentEdit.commentId}/update`,
				commentEdit,
				{
					headers: {
						authorization,
					},
				},
			);
			return response;
		},
		{
			onSuccess: ({ status, data }) => {
				if (status === "200") {
					console.log("data =>", data);
					console.log("status =>", status);
					// queryClient.invalidateQueries("getComments");
					// alert(data);
				}
			},
			onError: error => {
				alert("수정되지않았어요🥹");
			},
		},
	);

	//댓글 삭제하기 delete요청
	const delMutation = useMutation(commentId =>
		axios.delete(`${BASE_URL}/auth/comment/${commentId.commentId}/delete`, {
			headers: {
				authorization,
			},
		}),
	);

	//댓글 수정하기 이벤트핸들러(온체인지)
	const handleEdit = e => {
		const editComment = e.target.value;
		setEditComment(editComment);
	};

	//댓글 수정하기 쿼리 요청(온클릭)
	const handleEditComplete = e => {
		console.log("editComment=>", editComment);
		if (editComment === "") {
			alert("댓글을 수정해주세요!");
		} else {
			editMutation(
				{
					commentId: comment.commentId,
					commentContent: editComment,
				},
				{
					onError: (error, variables, context) => {
						console.log("error => ", error);
					},
					onSuccess: (data, variables, context) => {
						queryClient.invalidateQueries("getComments");
						alert(data.data);
					},
				},
			);
		}
		setEdit(false);
	};

	//댓글 삭제하기 쿼리요청
	const handleRemove = e => {
		e.preventDefault();
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			alert("삭제되었습니다.");
			delMutation.mutate({ commentId: comment.commentId });
		} else {
			alert("취소합니다.");
		}
	};
	console.log("mycommenitem=>", comment);

	return (
		<Box>		
			{edit ? (
				<Box>
					<Input
						type="text"
						name="commentContent"
						defaultValue={comment?.commentContent}
						required={comment?.commentContent}
						onChange={handleEdit}
					/>
					<Button onClick={handleEditComplete}>완료</Button>
				</Box>
			) : (
				<Box>
					<p>{comment.commentContent}</p>
					<Button
						onClick={() => {
							setEdit(!edit);
						}}
					>
						수정
					</Button>
					<Button onClick={handleRemove}>삭제</Button>
				</Box>
			)}
		</Box>
	);
};

export default MyCommentEdit;

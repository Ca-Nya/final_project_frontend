import { useState } from "react";
import { Box } from "../../components";
import { Default, Mobile } from "../../assets/mediaQuery";
import {
	QueryClient,
	useMutation,
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Comment, MblComment } from "./comment";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyCommentEdit = ({ comment }) => {
	const navigate = useNavigate();
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
	const { mutate: editMutation } = useMutation(
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
					// console.log("data =>", data);
					// console.log("status =>", status);					
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
		if (editComment === "") {
			alert("변경내용이 없습니다.");
		} else {
			editMutation(
				{
					commentId: comment.commentId,
					commentContent: editComment,
				},
				{
					onError: (error, variables, context) => {
						// console.log("error => ", error);
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

	return (
		<Box>
			<Default>
				<Comment
					edit={edit}
					setEdit={setEdit}
					editComment={editComment}
					navigate={navigate}
					onDeleteComment={handleRemove}
					onEditComment={handleEditComplete}
					onhandleEdit={handleEdit}
					ondelMutation={delMutation}
					comment={comment}
				/>
			</Default>
			<Mobile>
				<MblComment
					edit={edit}
					setEdit={setEdit}
					editComment={editComment}
					navigate={navigate}
					onDeleteComment={handleRemove}
					onEditComment={handleEditComplete}
					onhandleEdit={handleEdit}
					ondelMutation={delMutation}
					comment={comment}
				/>
			</Mobile>
		</Box>
	);
};

export default MyCommentEdit;

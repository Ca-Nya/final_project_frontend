import React, { useState } from "react";
import { Box, Input, Button, Form } from "../../common";
import {
	QueryClient,
	useMutation,
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentEdit = ({ item }) => {

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//수정여부 스테이트
	const [edit, setEdit] = useState(false);
	//수정코멘트 스테이트
	const [editComment, setEditComment] = useState("");

    //queryClient 선언하기
    const queryClient = useQueryClient();

	//댓글 수정하기 put요청
	const editMutation = useMutation(commentEdit =>
		axios.put(
			`${BASE_URL}/auth/comment/${commentEdit.commentId}/update`,
			commentEdit,
			{
				headers: {
					authorization,
				},
			},
		),
         { onSuccess: () =>{
            queryClient.invalidateQueries('getComments');
         } }
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
        console.log("editComment=>",editComment,);
		e.preventDefault();
        if(editComment===""){
            alert("댓글을 수정해주세요!")
        } else {
            editMutation.mutate({
                commentId: item.commentId,
                commentContent: editComment,
            });
        }
       setEdit(false);
	};

	//댓글 삭제하기 쿼리요청
	const handleRemove = e => {
		e.preventDefault();
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			alert("삭제되었습니다.");
			delMutation.mutate({ commentId:item.commentId });
		} else {
			alert("취소합니다.");
		}
	};

	return (
		<Box>
			{item.memberNickname === nickname ? (
				<Box>
					{edit ? (
						<Box>
							<Input
								type="text"
								name="commentContent"
								defaultValue={item?.commentContent}
                                required={item?.commentContent}
								onChange={handleEdit}
							/>
							<Button onClick={handleEditComplete}>완료</Button>
							<Button onClick={handleRemove}>삭제</Button>
						</Box>
					) : (
						<>
							<p>
								{item.memberNickname}님: {item.commentContent}
							</p>
							<Button
								onClick={() => {
									setEdit(!edit);
								}}
							>
								수정
							</Button>
							<Button onClick={handleRemove}>삭제</Button>
						</>
					)}
				</Box>
			) : (
				<p key={item.commentId}>
					{item.memberNickname}님: {item.commentContent}
				</p>
			)}
		</Box>
	);
};

export default CommentEdit;



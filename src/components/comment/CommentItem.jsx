import { useState } from "react";
import { Input, Button, Form, Text } from "../../common";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentItem = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//코멘트 담기 스테이트
	const [ment, setMent] = useState("");
	//queryClient 선언하기
	const queryClient = useQueryClient();

	//댓글 등록하기 post요청
	const mutation = useMutation(
		commentContent =>
			axios.post(`${BASE_URL}/auth/comment/${id}/create`, commentContent, {
				headers: {
					authorization,
				},
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries("getComments");
				alert("댓글이 등록되었습니다.");
			},
		},
	);

	//댓글 등록하기 쿼리요청
	const onClickHandler = e => {
		e.preventDefault();
		if (authorization) {
			mutation.mutate({ commentContent: ment });
			setMent("");
		} else {
			alert("로그인해주셔야 댓글입력가능합니다.");
			navigate("/join");
		}
	};

	return (
		<>
			{nickname ? <Text>{nickname}</Text> : null}
			<Form onSubmit={onClickHandler}>
				<Input
					type="text"
					name="comment"
					placeholder="댓글을 입력해주세요."
					value={ment}
					onChange={e => {
						const comment = e.target.value;
						setMent(comment);
					}}
				/>
				<Button>등록</Button>
			</Form>
		</>
	);
};

export default CommentItem;

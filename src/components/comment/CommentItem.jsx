import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Input, Button, Form } from "../../common";
import axios from "axios";
import { __addComment } from "../../redux/modules/comment/commentSlice";
import {
	QueryClient,
	useMutation,
	useQueryClient,
	useQuery,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentItem = () => {
	const authorization = localStorage.getItem("Authorization");
	const nickname = localStorage.getItem("Nickname");
	const dispatch = useDispatch();
	const [ment, setMent] = useState("");

	// const onClickHandler = e => {
	// 	e.preventDefault();
	// 	dispatch(__addComment(ment));
	// };

	const mutation = useMutation(commentContent =>
		axios.post(`${BASE_URL}/auth/comment/3/create`, commentContent, {
			headers: {
				authorization,
			},
		}),
	);

	const onClickHandler = e => {
		e.preventDefault();
		mutation.mutate({ commentContent: ment });
		setMent("");
	};

	return (
		<>
			{nickname ? <p>{nickname}</p> : null}
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

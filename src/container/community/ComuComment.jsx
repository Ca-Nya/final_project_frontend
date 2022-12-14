import { useState } from "react";
import { Margin } from "../../components";
import axios from "axios";
import { Default, Mobile } from "../../assets/mediaQuery";
import { MblCommentPost, CommentPost } from "./comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const ComuComment = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
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
		communityCommentContent =>
			axios.post(
				`${BASE_URL}/auth/communityComment/${id}/create`,
				communityCommentContent,
				{
					headers: {
						authorization,
					},
				},
			),
		{
			onSuccess: () => {
				queryClient.invalidateQueries("getComuComments");
				alert("댓글이 등록되었습니다.");
			},
		},
	);

	//댓글 등록하기 쿼리요청
	const onClickHandler = e => {
		e.preventDefault();
		if (authorization) {
			mutation.mutate({ communityCommentContent: ment });
			setMent("");
		} else {
			alert("로그인해 후 댓글입력해주세요.");
			navigate("/join");
		}
	};
	return (
		<>
			<Default>
				<Margin margin="80px 0 0 0">
					<CommentPost
						onClickHandler={onClickHandler}
						ment={ment}
						setMent={setMent}
						nickname={nickname}
						navigate={navigate}
					/>
				</Margin>
			</Default>
			<Mobile>
				<MblCommentPost
					onClickHandler={onClickHandler}
					ment={ment}
					setMent={setMent}
					nickname={nickname}
					navigate={navigate}
				/>
			</Mobile>
		</>
	);
};

export default ComuComment;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Box, Input, Button, Form } from "../../common";
import MyCommentEdit from "./MyCommentEdit";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyComment = () => {
	
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	//MyComments get요청
	const { data, status } = useQuery(["getMyComments"], async () => {
		const response = await axios.get(
			`${BASE_URL}/member/auth/mypage/comments`,
			{
				headers: {
					authorization,
				},
			},
		);
		return response.data;
	});
	console.log("MyComment=>", data);

	return (
		<Box>
			<p>{nickname}님이 작성하신 댓글입니다.</p>
			{data && data.length > 0 ? (
				<Box>
					{data?.map(comment => {
						return <MyCommentEdit key={comment.commentId} comment={comment} />;
					})}
				</Box>
			) : (
				<p>작성하신 댓글이 없습니다.</p>
			)}
		</Box>
	);
};

export default MyComment;

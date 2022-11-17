import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Box, Input, Button, Form } from "../../common";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyComment = () => {
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

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
		<ul>
      <li><p>{nickname}님이 작성하신 댓글입니다.</p></li>			
			{data && data?.length > 0 ? (
				<li>
					{data?.map(item => {
						return (
							<Box key={item.commentId}>
								<p>제목: {item.boardTitle}</p>
								<p>댓글:{item.commentContent}</p>
							</Box>
						);
					})}
				</li>
			) : (
				<li><p>작성한 댓글이 없습니다.</p></li>
			)}
		</ul>
	);
};

export default MyComment;

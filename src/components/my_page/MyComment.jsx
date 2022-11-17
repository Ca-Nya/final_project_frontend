import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Input, Button, Form } from "../../common";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyComment = () => {
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	const { data, status } = useQuery(["getMyComments"], async () => {
		const response = await axios.get(
			`${BASE_URL}/member/auth/mypage/mycomments`,
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
			{data.map(item => {
				return (
          <Box key={item.boardId}>
            <li>{item.imageList[0]}</li>
            <li>{item.boardTitle}</li>
            <li>{item.commentContent}</li>
          </Box>
          
        );
			})}
		</ul>
	);
};

export default MyComment;

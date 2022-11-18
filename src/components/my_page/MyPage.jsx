import MyComment from "./MyComment";
import MYBoard from "./MyBoard";
import MyLike from "./MyLike";
import { Box, Input, Button, Form } from "../../common";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyPage = () => {

	const navigate = useNavigate();
	
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//내가좋아요한 게시물 get요청
	const { data, status } = useQuery(
		["getMyBoard"],
		async () => {
			const response = await axios.get(
				`${BASE_URL}/member/auth/mypage/heart-boards`,
				{
					headers: {
						authorization,
					},
				},
			);
			return response.data;
		},
		{
			if(isError) {
				alert("내가 좋아요한 게시물 불러오기 실패");
			},
		},
	);
	console.log("MyLike=>", data);

	return (
		<Box>
			<span
				onClick={() => {
					navigate("/myboard");
				}}
			>
				내가쓴글/{" "}
			</span>
			<span
				onClick={() => {
					navigate("/mylike");
				}}
			>
				좋아요/{" "}
			</span>
			<span
				onClick={() => {
					navigate("/mycomment");
				}}
			>
				작성댓글/{" "}
			</span>
		</Box>
	);
};

export default MyPage;

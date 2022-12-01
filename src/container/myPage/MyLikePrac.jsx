import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components";
import Like from "./like";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyLikePrac = () => {
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	const [page, setPage] = useState(0);

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

	// const target = useRef(null);

	// useEffect(()=>{
	// 	const observer = new IntersectionObserver();
	// },[])

	return (
		<Box>
            <Like
            data={data}
            navigate={navigate}             
            />
		</Box>
	);
};

export default MyLikePrac;

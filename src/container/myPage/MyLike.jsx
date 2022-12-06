import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components";
import Like from "./like/Like";

const BASE_URL = process.env.REACT_APP_SERVER;

//로컬스토리지 토큰가져오기
const authorization = localStorage.getItem("Authorization");

const fetchPostList = async pageParam => {
	const { data } = await axios.get(
		`${BASE_URL}/member/auth/mypage/heart-boards?page=${pageParam}&size=3`,
		{
			headers: {
				authorization,
			},
		},		
	);
	const { myPageList:page, isLast } = data;	
	return { page, nextPage: pageParam + 1, isLast };
};

const MyLike = () => {
	const { ref, inView } = useInView();
	const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
		["page"],
		({ pageParam = 1 }) => fetchPostList(pageParam),
		{
			getNextPageParam: lastPage =>
				!lastPage.isLast ? lastPage.nextPage : undefined,
		},
	);

	console.log("data.pages===>", data?.pages);

	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView]);

	const navigate = useNavigate();

	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

	// const [page, setPage] = useState(0);

	//내가좋아요한 게시물 get요청
	// const { data, status } = useQuery(
	// 	["getMyBoard"],
	// 	async () => {
	// 		const response = await axios.get(
	// 			`${BASE_URL}/member/auth/mypage/heart-boards`,
	// 			{
	// 				headers: {
	// 					authorization,
	// 				},
	// 			},
	// 		);
	// 		return response.data;
	// 	},
	// 	{
	// 		if(isError) {
	// 			alert("내가 좋아요한 게시물 불러오기 실패");
	// 		},
	// 	},
	// );
	// console.log("MyLike=>", data);

	// const target = useRef(null);

	// useEffect(()=>{
	// 	const observer = new IntersectionObserver();
	// },[])

	if (status === "loading") return <p>로딩중</p>;
	if (status === "error") return <p>에러입니다.</p>;

	return (
		<Box>
			<Like
				data={data}
				navigate={navigate}
			/>
			{isFetchingNextPage ? <p>로딩중</p> : <div ref={ref}></div>}
		</Box>
	);
};

export default MyLike;

import { useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { BoardList, MblBoardList } from "./boardList";
import { Box, Image, Margin, Text } from "../../components";
import { Default, Mobile } from "../../assets/mediaQuery";
import Spinner from "../../assets/icons/spinner.gif";
import { useEffect } from "react";
import TopButton from "../../components/topButton/TopButton";

const BASE_URL = process.env.REACT_APP_SERVER;

//로컬스토리지 토큰가져오기
const authorization = localStorage.getItem("Authorization");

const fetchPostList = async pageParam => {
	const { data } = await axios.get(
		`${BASE_URL}/get/community?page=${pageParam}&size=3`,
		{
			headers: {
				authorization,
			},
		},
	);
	const { communityList: page, isLast } = data;
	return { page, nextPage: pageParam + 1, isLast };
};

const ComuList = () => {	
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authoriztion");
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
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

	if (status === "loading")
	return (
		<Box>
			<Image src={Spinner} alt={"로딩중.."} />
		</Box>
	);
if (status === "error") return <p>에러입니다.</p>;

	return (
		<>
			<Default>
				<Margin margin="160px 0 0 0">
					<BoardList
						navigate={navigate}
						data={data}
						authorization={authorization}
						nickname={nickname}
					/>
				</Margin>
			</Default>
			<Mobile>				
				<MblBoardList
					navigate={navigate}
					data={data}
					authorization={authorization}
					nickname={nickname}
				/>
				{isFetchingNextPage ? (
				<Box>
					<Image src={Spinner} alt={"로딩중.."} />
				</Box>
			) : (
				<div ref={ref}></div>
			)}
				<TopButton></TopButton>
			</Mobile>
		</>
	);
};

export default ComuList;

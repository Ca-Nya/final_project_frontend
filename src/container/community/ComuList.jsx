import { useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { BoardList, MblBoardList } from "./boardList";
import {
	Box,
	Image,
	Margin,
	Text,
	Flex,
	Strong,
	Button,
	FirstHeading,
} from "../../components";
import { Default, Mobile } from "../../assets/mediaQuery";
import spinner from "../../assets/icons/spinner.gif";
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

	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView]);

	if (status === "loading")
		return (
			<Box variant="spinner-wrap">
				<Flex jc="center" ai="center">
					<Image src={spinner} alt="로딩중" variant="spinner" />
				</Flex>
			</Box>
		);
	if (status === "error")
		return (
			<Box variant="spinner-wrap">
				<Flex fd="column" jc="center" ai="center" gap="100px">
					<Strong variant="warning">
						에러입니다.😭 빠른 시일 내에 해결하겠습니다.
					</Strong>
					<Button onClick={() => navigate(-1)} variant="cafe-review-post">
						돌아가기
					</Button>
				</Flex>
			</Box>
		);

	return (
		<>
			<Default>
				<Margin margin="160px 0 180px 0">
					<Margin margin="170px 0 20px 0 ">
						<Box variant="container">
							<Box variant="overalls-nav">
								<Flex jc="space-between" ai="center">
									<Margin margin="0 57px 0 0">
										<FirstHeading variant="title">커뮤니티 👥</FirstHeading>
									</Margin>
								</Flex>
							</Box>
						</Box>
					</Margin>

					<BoardList
						navigate={navigate}
						data={data}
						authorization={authorization}
						nickname={nickname}
					/>
					{isFetchingNextPage ? (
						<Box variant="spinner-wrap">
							<Flex jc="center" ai="center">
								<Image src={spinner} alt="로딩중" variant="spinner" />
							</Flex>
						</Box>
					) : (
						<div ref={ref}></div>
					)}
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
					<Box variant="spinner-wrap">
						<Flex jc="center" ai="center">
							<Image src={spinner} alt="로딩중" variant="spinner" />
						</Flex>
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

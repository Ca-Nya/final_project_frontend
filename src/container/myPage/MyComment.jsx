import React from "react";
import { Box, Image, Text, Margin } from "../../components";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useEffect } from "react";
import MyCommentEdit from "./MyCommentEdit";
import Spinner from "../../assets/icons/spinner.gif";

const BASE_URL = process.env.REACT_APP_SERVER;

//로컬스토리지 토큰가져오기
const authorization = localStorage.getItem("Authorization");

const fetchPostList = async pageParam => {
	const { data } = await axios.get(
		`${BASE_URL}/member/auth/mypage/comments?page=${pageParam}&size=3`,
		{
			headers: {
				authorization,
			},
		},
	);
	const { myPageList: page, isLast } = data;
	return { page, nextPage: pageParam + 1, isLast };
};

const MyComment = () => {
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
		<Box>
			<Margin margin="30px 3px 10px 3px">
				<Box variant="mypage-nav">
					<Text variant="title">작성 댓글 📋</Text>
				</Box>
			</Margin>
			{data.pages[0].page ? (
				<Box>
					{data?.pages?.map((page, idx) => (
						<React.Fragment key={idx}>
							{page?.page?.map(comment => (
								<>
									<MyCommentEdit key={comment.commentId} comment={comment} />
								</>
							))}
						</React.Fragment>
					))}
					{isFetchingNextPage ? (
						<Box>
							<Image src={Spinner} alt={"로딩중.."} />
						</Box>
					) : (
						<div ref={ref}></div>
					)}
				</Box>
			) : (
				<Box>
					<Text variant="comment"> 작성한 댓글이 없습니다.</Text>
				</Box>
			)}
		</Box>
	);
};

export default MyComment;

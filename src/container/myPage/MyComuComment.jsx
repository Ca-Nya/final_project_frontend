import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useEffect } from "react";
import { Box, Text, Margin, Image } from "../../components";
import MyComuCommentEdit from "./MyComuCommentEdit";
import Spinner from "../../assets/icons/spinner.gif";

const BASE_URL = process.env.REACT_APP_SERVER;

//로컬스토리지 토큰가져오기
const authorization = localStorage.getItem("Authorization");

const fetchPostList = async pageParam => {
	const { data } = await axios.get(
		`${BASE_URL}/member/auth/mypage/communityComments?page=${pageParam}&size=3`,
		{
			headers: {
				authorization,
			},
		},
	);
	const { myPageList: page, isLast } = data;
	return { page, nextPage: pageParam + 1, isLast };
};


const MyComuComment = () => {  
  
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

	//MyComments get요청
	// const { data, status } = useQuery(["getMyComuComments"], async () => {
	// 	const response = await axios.get(
	// 		`${BASE_URL}/member/auth/mypage/communityComments`,
	// 		{
	// 			headers: {
	// 				authorization,
	// 			},
	// 		},
	// 	);
	// 	return response.data;
	// });
	// console.log("MycommunityComments=>", data);

  return (
    <Box>
    <Margin margin="30px 3px 10px 3px">
      <Box variant="mypage-nav">
        <Text variant="title">커뮤 댓글 📋</Text>
      </Box>
    </Margin>
    {data.pages[0].page ? (
      <Box>
      	{data?.pages?.map((page, idx) => (
						<React.Fragment key={idx}>
							{page?.page?.map(comment => (
								<>
									<MyComuCommentEdit key={comment?.commentId} comment={comment} />
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
  )
}

export default MyComuComment;

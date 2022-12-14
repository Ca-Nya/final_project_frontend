import React from "react";
import {
	Box,
	Image,
	Text,
	Margin,
	Flex,
	Button,
	Strong,
} from "../../components";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Default, Mobile } from "../../assets/mediaQuery";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useEffect } from "react";
import MyCommentEdit from "./MyCommentEdit";
import spinner from "../../assets/icons/spinner.gif";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isProfile } from "../../recoil/Atom";
import arrow from "../../assets/icons/left_arrow.svg";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyComment = () => {
	const [profile,setProfile] = useRecoilState(isProfile);
	const navigate = useNavigate();
	const { ref, inView } = useInView();

	const authorization = localStorage.getItem("Authorization");

	const { data, status, fetchNextPage, isFetchingNextPage, error } =
		useInfiniteQuery(
			["myComment"],
			async ({ pageParam = 1 }) => {
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
			},			
			{
				getNextPageParam: lastPage =>
					!lastPage.isLast ? lastPage.nextPage : undefined,
			},
			{ retry: 1 },
			{
				onError: error => {
					console.log(error.response);
				},
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
	if (error?.response.data === "작성한 댓글이 없습니다.") {
		return (
			<>
			<Default>
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">작성한 댓글이 없습니다😭</Strong>
						<Button onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
			</Default>
			<Mobile>
				<Box>
					<Margin margin="10px auto">
						<Flex ai="center">
							<Box size="nav-white">
								<Margin margin="10px">
									<Flex ai="center" gap="98px">
										<Image
											src={arrow}
											onClick={() => {
												navigate("/mypage/myall");
												setProfile(isProfile);
											}}
										/>
										<Text size="lg">내가 쓴 글</Text>
									</Flex>
								</Margin>
							</Box>
						</Flex>
					</Margin>
					<Box variant="spinner-wrap">
						<Flex fd="column" jc="center" ai="center" gap="100px">
							<Strong variant="warning">작성한 댓글이 없습니다😭</Strong>
							<Button
								size="l"
								onClick={() => {
									navigate(-1);
									setProfile(isProfile);
								}}
								variant="cafe-review-post"
							>
								돌아가기
							</Button>
						</Flex>
					</Box>
				</Box>
			</Mobile>
		</>
		);
	}
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
		<Box>
			<Default>
				<Margin margin="30px 3px 10px 3px">
					<Box variant="mypage-nav">
						<Text variant="title">작성 댓글 📋</Text>
					</Box>
				</Margin>
				{data.pages[0].page.length > 0 ? (
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
							<Box variant="spinner-wrap">
								<Flex jc="center" ai="center">
									<Image src={spinner} alt="로딩중" variant="spinner" />
								</Flex>
							</Box>
						) : (
							<div ref={ref}></div>
						)}
					</Box>
				) : (
					<>
						<Box variant="spinner-wrap">
							<Flex fd="column" jc="center" ai="center" gap="100px">
								<Strong variant="warning">작성한 댓글이 없습니다😭</Strong>
								<Button onClick={() => navigate(-1)} variant="cafe-review-post">
									돌아가기
								</Button>
							</Flex>
						</Box>
					</>
				)}
			</Default>
			<Mobile>
			<Margin margin="10px auto">
				<Flex ai="center">
					<Box size="nav-white">
						<Margin margin="10px">
							<Flex ai="center" gap="98px">
								<Image src={arrow} onClick={()=>{                                    
                                    navigate(-1)
                                    setProfile(isProfile)
                                }}/>
								<Text size="lg">작성댓글</Text>
							</Flex>
						</Margin>
					</Box>
				</Flex>
			</Margin>
				{data.pages[0].page.length > 0 ? (
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
							<Box variant="spinner-wrap">
								<Flex jc="center" ai="center">
									<Image src={spinner} alt="로딩중" variant="spinner" />
								</Flex>
							</Box>
						) : (
							<div ref={ref}></div>
						)}
					</Box>
				) : (
					<>
						<Box variant="spinner-wrap">
							<Flex fd="column" jc="center" ai="center" gap="100px">
								<Strong variant="warning">작성한 댓글이 없습니다😭</Strong>
								<Button
									size="l"
									onClick={() => navigate(-1)}
									variant="cafe-review-post"
								>
									돌아가기
								</Button>
							</Flex>
						</Box>
					</>
				)}
			</Mobile>
		</Box>
	);
};

export default MyComment;

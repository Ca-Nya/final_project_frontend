import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
import { Image, Box, Flex, Button, Strong } from "../../components";
import { Board, MblBoard } from "./board";
import { Default, Mobile } from "../../assets/mediaQuery";
import { isProfile } from "../../recoil/Atom";
import spinner from "../../assets/icons/spinner.gif";
import { useRecoilState } from "recoil";
import * as Sentry from "@sentry/react";

const BASE_URL = process.env.REACT_APP_SERVER;

const MyBoard = () => {
	const navigate = useNavigate();

	const { ref, inView } = useInView();
	const [pofile, setProfile] = useRecoilState(isProfile);
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	const { data, status, fetchNextPage, isFetchingNextPage, error, refetch } =
		useInfiniteQuery(
			["myBoard"],
			async ({ pageParam = 1 }) => {
				const { data } = await axios.get(
					`${BASE_URL}/member/auth/mypage/boards?page=${pageParam}&size=3`,
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
			{
				onError: error => {
					Sentry.captureException(error);
				},
			},
		);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	// 마이페이지 게시글 삭제 Hook
	const { mutate: deletePostMutate } = useDeleteDetailPost();

	// 마이페이지 게시글 삭제 핸들러
	const handelDeletePost = item => () => {
		deletePostMutate(item.boardId, {
			onSuccess: (data, variables, context) => {
				alert("삭제 완료되었습니다!");
			},
			onError: (error, variables, context) => {
				Sentry.captureException(error);
				alert("삭제를 실패했습니다");
			},
		});
	};
	// 마이페이지 게시글 수정 핸들러
	const handleEditPost = item => () => {
		navigate(`/detail/edit/${item.boardId}`);
	};

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
		<Box>
			<Default>
				<Board
					data={data}
					navigate={navigate}
					onDeletePost={handelDeletePost}
					onEditPost={handleEditPost}
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
			</Default>
			<Mobile>
				<MblBoard
					data={data}
					navigate={navigate}
					onDeletePost={handelDeletePost}
					onEditPost={handleEditPost}
					setProfile={setProfile}
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
			</Mobile>
		</Box>
	);
};

export default MyBoard;

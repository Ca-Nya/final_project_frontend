import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteComuPost } from "../../querys/community";
import axios from "axios";
import { Image, Box, Flex, Button, Strong, Margin, Text } from "../../components";
// 로딩 스피너
import spinner from "../../assets/icons/spinner.gif";
import { Default, Mobile } from "../../assets/mediaQuery";
import { ComuBoard, MblComuBoard } from "./comuBoard";
import { useRecoilState } from "recoil";
import { isProfile } from "../../recoil/Atom";
import arrow from "../../assets/icons/left_arrow.svg";




const MyComuBoard = () => {
	const navigate = useNavigate();
	const [profile,setProfile] = useRecoilState(isProfile)
	const { ref, inView } = useInView();
	const BASE_URL = process.env.REACT_APP_SERVER;
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	const { data, status, fetchNextPage, isFetchingNextPage, error } =
		useInfiniteQuery(
			["myComuBoard"],
			async ({ pageParam = 1 }) => {
				const { data } = await axios.get(
					`${BASE_URL}/member/auth/mypage/communities?page=${pageParam}&size=3`,
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

	//커뮤게시글 삭제하기 delete쿼리요청
	const { mutate: deleteComuPostMutate } = useDeleteComuPost();

	//커뮤게시글 삭제하기
	const handleRemove = item => () => {
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			deleteComuPostMutate(item.communityId, {
				onSuccess: (data, variables, context) => {
					alert("삭제 완료되었습니다!");
				},
				onError: (error, variables, context) => {
					alert("삭제를 실패했습니다");
				},
			});
		} else {
			alert("취소합니다.");
		}
	};

	// 마이페이지 커뮤니티게시글 수정 핸들러
	const handleEditComuPost = item => () => {
		navigate(`/edit/${item.communityId}`);
	};

	if (status === "loading")
		return (
			<Box variant="spinner-wrap">
				<Flex jc="center" ai="center">
					<Image src={spinner} alt="로딩중" variant="spinner" />
				</Flex>
			</Box>
		);
		if (error?.response?.data === "작성한 커뮤니티 글이 없습니다.") {
			return (
				<>
					<Default>
						<Box variant="spinner-wrap">
							<Flex fd="column" jc="center" ai="center" gap="100px">
								<Strong variant="warning">작성한 게시글이 없습니다😭</Strong>
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
														navigate(-1);
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
									<Strong variant="warning">작성한 게시글 없습니다😭</Strong>
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
				<ComuBoard
					data={data}
					navigate={navigate}
					onDeleteComuPost={handleRemove}
					onEditComuPost={handleEditComuPost}
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
				<MblComuBoard
					data={data}
					navigate={navigate}
					onDeleteComuPost={handleRemove}
					onEditComuPost={handleEditComuPost}
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

export default MyComuBoard;

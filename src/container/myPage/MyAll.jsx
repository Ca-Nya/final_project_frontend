import { Box, Image, Flex, Strong, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";
import { resetToken } from "../../redux/modules/join/joinSlice";
import axios from "axios";
import spinner from "../../assets/icons/spinner.gif";
import { Default, Mobile } from "../../assets/mediaQuery";
import { All, MblAll } from "./all";

const MyAll = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;

	const navigate = useNavigate();
	const dispatch = useDispatch();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//토큰 리셋 useEffect
	useEffect(() => {
		if (!authorization) {
			dispatch(resetToken());
		}
	}, [dispatch, authorization]);
	//내가좋아요한 게시물 get요청
	const {
		data: myContent,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ["getMyPage"],
		queryFn: async () => {
			try {
				const response = await axios.get(`${BASE_URL}/member/auth/mypage/all`, {
					headers: {
						authorization,
					},
				});
				
				return response.data;
			} catch (error) {
				
				return error;
			}
		},
		suspense: true,
	});

	

	const {
		recentlyMyBoardList,
		recentlyMyCommentList,
		recentlyMyHeartBoardList,
		recentlyMyCommunityList,
		recentlyMyCommunityCommentList,
	} = myContent;



	const fetchPostId = async () => {
		try {
			const jwtToken = localStorage.getItem("Authorization");
			const response = await axios.post(
				`${BASE_URL}/auth/board/save`,
				"fetchPostId",
				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);
			
			return response.data;
		} catch (error) {
			
			throw error;
		}
	};
	// 게시글 아이디 요청 Hook
	const getPostId = useMutation(fetchPostId, {
		onMutate: variables => {
			console.log("onMutate =>", variables);
		},
		onSuccess: data => {
			navigate(`/write/${data}`);
		},
		onError: (error, variables) => {
			alert("게시글을 작성할 수 없습니다!");
		},
	});
	// postId get요청
	const handleGetPostId = () => {
		getPostId.mutate();
	};

	if (isLoading)
		return (
			<Box variant="spinner-wrap">
				<Flex jc="center" ai="center">
					<Image src={spinner} alt="로딩중" variant="spinner" />
				</Flex>
			</Box>
		);

	if (isError)
		return (
			<>
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
			</>
		);

	return (
		<>
			<Default>
				<Box variant="mypage-category">
					<All
						recentlyMyBoardList={recentlyMyBoardList}
						recentlyMyCommentList={recentlyMyCommentList}
						recentlyMyHeartBoardList={recentlyMyHeartBoardList}
						recentlyMyCommunityList={recentlyMyCommunityList}
						recentlyMyCommunityCommentList={recentlyMyCommunityCommentList}
						spinner={spinner}
						navigate={navigate}
					/>
				</Box>
			</Default>
			<Mobile>
				<MblAll
					recentlyMyBoardList={recentlyMyBoardList}
					recentlyMyCommentList={recentlyMyCommentList}
					recentlyMyHeartBoardList={recentlyMyHeartBoardList}
					recentlyMyCommunityList={recentlyMyCommunityList}
					recentlyMyCommunityCommentList={recentlyMyCommunityCommentList}
					handleGetPostId={handleGetPostId}
					dispatch={dispatch}
					resetToken={resetToken}
					spinner={spinner}
					navigate={navigate}
				/>
			</Mobile>
		</>
	);
};

export default MyAll;

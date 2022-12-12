import { Box, Flex, Image, Strong, Button } from "../../components";
import { useNavigate, useMatch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileImage } from "../../querys/myPage";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
import { MypgHome, MblMypgHome } from "./mypgHome";
import { Default, Mobile } from "../../assets/mediaQuery";
import { editProfileImage } from "../../redux/modules/join/joinSlice";
import TopButton from "../../components/topButton/TopButton";
// 로딩 스피너
import spinner from "../../assets/icons/spinner.gif";

const MyPage = () => {
	const dispatch = useDispatch();

	const BASE_URL = process.env.REACT_APP_SERVER;

	const navigate = useNavigate();

	//mypage category outlet useMatch
	const myLikeMatch = useMatch("/mypage/mylike");
	const myBoardMatch = useMatch("/mypage/myboard");
	const myCommentMatch = useMatch("/mypage/mycomment");
	const myAllMatch = useMatch("/mypage/myall");
	const myComuBoardMatch = useMatch("/mypage/mycommunityboard");
	const myComuCommentMatch = useMatch("/mypage/mycommunitycomment");

	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//내가좋아요한 게시물 get요청
	const {
		data: myContent,
		isError,
		isLoading,
		refetch,
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
		memberBoardCount,
		memberCommentCount,
		memberHeartCount,
		memberProfileImage,
		memberCommunityCount,
		memberCommunityCommentCount,
	} = myContent;

	useEffect(() => {
		dispatch(editProfileImage(memberProfileImage));
	}, [memberProfileImage]);

	// 프로필 수정 Hook
	const { mutate: editProfileImageMutate } = useEditProfileImage();

	// 프로필 수정 핸들러
	const handleChangeProfileImage = e => {
		if (!e.target.files) {
			alert("선택된 이미지가 없습니다");
			return;
		}
		const formData = new FormData();
		formData.append("image", e.target.files[0]);
		editProfileImageMutate(formData, {
			onSuccess: (data, variables, context) => {
				refetch();
			},
			onError: (error, variables, context) => {				
				alert("수정을 실패했습니다.");
			},
		});
	};

	// 마이페이지 게시글 삭제 Hook
	const { mutate: deletePostMutate } = useDeleteDetailPost();

	// 마이페이지 게시글 삭제 핸들러
	const handelDeletePost = item => () => {
		deletePostMutate(item.boardId, {
			onSuccess: (data, variables, context) => {
				alert("삭제 완료되었습니다!");
			},
			onError: (error, variables, context) => {
				alert("삭제를 실패했습니다");
			},
		});
	};

	// 마이페이지 게시글 수정 핸들러
	const handleEditPost = item => () => {
		navigate(`/detail/edit/${item.boardId}`);
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

	if (isError) return <Box>에러</Box>;

	return (
		<>
			<Default>
				<MypgHome
					onEditPost={handleEditPost}
					onDeletePost={handelDeletePost}
					onChangeProfileImage={handleChangeProfileImage}
					recentlyMyBoardList={recentlyMyBoardList}
					recentlyMyCommentList={recentlyMyCommentList}
					recentlyMyHeartBoardList={recentlyMyHeartBoardList}
					memberBoardCount={memberBoardCount}
					memberCommentCount={memberCommentCount}
					memberHeartCount={memberHeartCount}
					memberProfileImage={memberProfileImage}
					navigate={navigate}
					myLikeMatch={myLikeMatch}
					myBoardMatch={myBoardMatch}
					myCommentMatch={myCommentMatch}
					myAllMatch={myAllMatch}
					myComuBoardMatch={myComuBoardMatch}
					myComuCommentMatch={myComuCommentMatch}
					nickname={nickname}
					recentlyMyCommunityList={recentlyMyCommunityList}
					recentlyMyCommunityCommentList={recentlyMyCommunityCommentList}
					memberCommunityCount={memberCommunityCount}
					memberCommunityCommentCount={memberCommunityCommentCount}
				/>
			</Default>
			<Mobile>
				<MblMypgHome
					onEditPost={handleEditPost}
					onDeletePost={handelDeletePost}
					onChangeProfileImage={handleChangeProfileImage}
					recentlyMyBoardList={recentlyMyBoardList}
					recentlyMyCommentList={recentlyMyCommentList}
					recentlyMyHeartBoardList={recentlyMyHeartBoardList}
					memberBoardCount={memberBoardCount}
					memberCommentCount={memberCommentCount}
					memberHeartCount={memberHeartCount}
					memberProfileImage={memberProfileImage}
					navigate={navigate}
					myLikeMatch={myLikeMatch}
					myBoardMatch={myBoardMatch}
					myCommentMatch={myCommentMatch}
					myAllMatch={myAllMatch}
					myComuBoardMatch={myComuBoardMatch}
					myComuCommentMatch={myComuCommentMatch}
					nickname={nickname}
					recentlyMyCommunityList={recentlyMyCommunityList}
					recentlyMyCommunityCommentList={recentlyMyCommunityCommentList}
					memberCommunityCount={memberCommunityCount}
					memberCommunityCommentCount={memberCommunityCommentCount}
				/>
				<TopButton />
			</Mobile>
		</>
	);
};

export default MyPage;

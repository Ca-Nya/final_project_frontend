import { Box } from "../../components";
import { useNavigate, useMatch } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileImage } from "../../querys/myPage";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";
import MypgHome from "./mypgHome/MypgHome";

const MyPage = () => {
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
				console.log("response =====>", response.data);
				return response.data;
			} catch (error) {
				console.log("error =>", error);
				return error;
			}
		},
		suspense: true,
	});

	console.log("MyPage=>", myContent);
	console.log("isError =>", isError, "isLoading =>", isLoading);

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

	console.log("MyPagerecentlyMyBoardList=>", recentlyMyBoardList);

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
				console.log("data =====>", data);
				refetch();
			},
			onError: (error, variables, context) => {
				console.log("error ====>", error);
				alert("수정을 실패했습니다");
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

	if (isLoading) return <Box>로딩중</Box>;
	if (isError) return <Box>에러</Box>;

	return (
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
	);
};

export default MyPage;

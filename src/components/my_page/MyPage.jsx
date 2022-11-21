import { Box, Input, Button, Image, Text } from "../../common";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileImage } from "../../querys/my_page";
import { useDeleteDetailPost } from "../../querys/detail";
import axios from "axios";

const MyPage = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;

	const navigate = useNavigate();

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
		memberBoardCount,
		memberCommentCount,
		memberHeartCount,
		memberProfileImage,
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
		<Box>
			<Box>
				<Box>
					<Image
						src={memberProfileImage}
						alt={memberProfileImage}
						variant="mypage-profile"
					/>
					<Input
						type="file"
						accept="image/*"
						onChange={handleChangeProfileImage}
					/>
				</Box>
				<Text>닉네임: {nickname}</Text>
				<Text>총 게시글 수: {memberBoardCount}</Text>
				<Text>총 댓글 수: {memberCommentCount}</Text>
				<Text>총 좋아요 한 수: {memberHeartCount}</Text>
			</Box>
			<Box>
				<Text
					onClick={() => {
						navigate("/myboard");
					}}
				>
					내가쓴글/{" "}
				</Text>
				<Text
					onClick={() => {
						navigate("/mylike");
					}}
				>
					좋아요/{" "}
				</Text>
				<Text
					onClick={() => {
						navigate("/mycomment");
					}}
				>
					작성댓글/{" "}
				</Text>
			</Box>
			<Box>
				<Text>모두보기</Text>
			</Box>
			<Box>
				<Text>내가 쓴 글</Text>
				{recentlyMyBoardList?.map(item => {
					return (
						<Box key={item.boardId}>
							<Box>
								<Image
									variant="mypage-post"
									src={item.imageList[0].imageUrl}
									alt={item.boardTitle}
								></Image>
								<Text>{item.boardTitle}</Text>
							</Box>
							<Button onClick={handleEditPost(item)}>수정</Button>
							<Button onClick={handelDeletePost(item)}>삭제</Button>
						</Box>
					);
				})}
			</Box>
			<Box>
				<Text>좋아요 한 글</Text>
				{recentlyMyHeartBoardList?.map(item => {
					return (
						<Box>
							<Box key={item.boardId}>
								<Image
									variant="mypage-post"
									src={item.imageList[0].imageUrl}
									alt={item.boardTitle}
								></Image>
								<Text>{item.boardTitle}</Text>
							</Box>
							<Button onClick={handleEditPost(item)}>수정</Button>
							<Button onClick={handelDeletePost(item)}>삭제</Button>
						</Box>
					);
				})}
			</Box>
			<Box>
				<Text>내가 작성한 댓글</Text>
				{recentlyMyCommentList?.map(item => {
					return (
						<Box>
							<Box key={item.commentId}>
								<Text>{item.commentContent}</Text>
								<Text>{item.boardTitle}</Text>
							</Box>
							<Button onClick={handleEditPost(item)}>수정</Button>
							<Button onClick={handelDeletePost(item)}>삭제</Button>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default MyPage;

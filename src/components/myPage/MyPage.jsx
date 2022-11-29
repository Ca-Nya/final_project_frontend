import {
	Box,
	Input,
	Button,
	Image,
	Text,
	Label,
	Margin,
	Flex,
} from "../../common";
import { Outlet, useNavigate, useMatch } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileImage } from "../../querys/myPage";
import { useDeleteDetailPost } from "../../querys/detail";
import Edit from "../../assets/icons/edit-profile.png";
import Comment from "../../assets/icons/comment.png";
import Heart from "../../assets/icons/heart.png";
import Write from "../../assets/icons/write.png";
import axios from "axios";

const MyPage = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;

	const navigate = useNavigate();

	//mypage category outlet useMatch
	const myLikeMatch = useMatch("/mypage/mylike");
	const myBoardMatch = useMatch("/mypage/myboard");
	const myCommentMatch = useMatch("/mypage/mycomment");
	const myAllMatch = useMatch("/mypage/myall");

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
		<Box variant="container-2">
			<Flex>
				{/* <Margin margin="0 0 0 0"> */}
					<Box variant="pofile">
						<Flex gap="1px" fd="column" ai="center">
							<Margin margin="10% 0 0 70%">
								<Box>
									<Label htmlFor="imageChange">
										<Image
											variant="profile-edit"
											src={Edit}
											title="프로필이미지 편집"
										/>
									</Label>
									<Input
										id="imageChange"
										variant="profile-edit"
										type="file"
										accept="image/*"
										onChange={handleChangeProfileImage}
									/>
								</Box>
							</Margin>
							<Image
								src={memberProfileImage}
								alt={memberProfileImage}
								variant="mypage-profile"
							/>
							<Box variant="pofile-namebox">
								<Flex jc="center" gap="5%">
									<Margin margin="8%">
										<Flex jc="center">
											<Text variant="join">{nickname}</Text>
										</Flex>
										<Margin margin="10%">
											<Box>
												<Flex gap="5%" ai="center" jc="center">
													<Text variant="level">Lv</Text>
													<Text variant="level-name">톨 💛</Text>
												</Flex>
											</Box>
										</Margin>
									</Margin>
								</Flex>
							</Box>

							<Margin margin="10% 0 0 0">
								<Box variant="category-box">
									<Flex gap="10%" jc="center">
										<Image variant="mypage-icon" src={Write} />
										<Image variant="mypage-icon" src={Heart} />
										<Image variant="mypage-icon" src={Comment} />
									</Flex>
								</Box>
								<Margin margin="2% 2% 0 0">
									<Box variant="category-title-box">
										<Flex jc="center" gap="7%">
											<Text variant="profile-base">내가쓴글</Text>
											<Text variant="profile-base">좋아요</Text>
											<Text variant="profile-base">작성댓글</Text>
										</Flex>
									</Box>
								</Margin>
							</Margin>
							<Margin margin="6% 0 0 0">
								<Box variant="category-title-box">
									<Flex gap="18%" jc="center">
										<Text variant="join">{memberBoardCount}</Text>
										<Text variant="join">{memberHeartCount}</Text>
										<Text variant="join">{memberCommentCount}</Text>
									</Flex>
								</Box>
							</Margin>
						</Flex>
					</Box>
				{/* </Margin> */}
				<Margin margin="2% 0 0 4vw">
					<Box variant="mypage-nav">
						<Flex gap="4%">
							<Text
								variant="button"
								onClick={() => {
									navigate("myall");
								}}
								isActive={myAllMatch !== null}
							>
								모두보기
							</Text>
							<Box>
								<Flex jc="center" gap="2px">
									<Text
										variant="button"
										onClick={() => {
											navigate("myboard");
										}}
										isActive={myBoardMatch !== null}
									>
										내가쓴글
									</Text>
									<Box variant="guide-point" isActive={myBoardMatch !== null}>
										<Margin margin="1px 0 0 0">
											<Text
												variant="button-count"
												isActive={myBoardMatch !== null}
											>
												{memberBoardCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
							<Box>
								<Flex jc="center" gap="2px">
									<Text
										variant="button"
										onClick={() => {
											navigate("mylike");
										}}
										isActive={myLikeMatch !== null}
									>
										좋아요한글
									</Text>
									<Box variant="guide-point" isActive={myLikeMatch !== null}>
										<Margin margin="1px 0 0 0">
											<Text
												variant="button-count"
												isActive={myLikeMatch !== null}
											>
												{memberHeartCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
							<Box>
								<Flex jc="center" gap="2px">
									<Text
										variant="button"
										onClick={() => {
											navigate("mycomment");
										}}
										isActive={myCommentMatch !== null}
									>
										작성댓글
									</Text>
									<Box variant="guide-point" isActive={myCommentMatch !== null}>
										<Margin margin="1px 0 0 0">
											<Text
												variant="button-count"
												isActive={myCommentMatch !== null}
											>
												{memberCommentCount}
											</Text>
										</Margin>
									</Box>
								</Flex>
							</Box>
						</Flex>
					</Box>
					{/* <Box>
						<Box variant="guide">
							<Text>내가 쓴 글</Text>
							<Text>더보기</Text>
						</Box>
						<Box variant="guide">
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
					</Box>
					<Box>
						<Text>좋아요 한 글</Text>
						{recentlyMyHeartBoardList?.map(item => {
							return (
								<Box key={item.boardId}>
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
								<Box key={item.commentId}>
									<Box key={item.commentId}>
										<Text>{item.commentContent}</Text>
										<Text>{item.boardTitle}</Text>
									</Box>
									<Button onClick={handleEditPost(item)}>수정</Button>
									<Button onClick={handelDeletePost(item)}>삭제</Button>
								</Box>
							);
						})}
					</Box> */}
					<Outlet />
				</Margin>
			</Flex>
		</Box>
	);
};

export default MyPage;

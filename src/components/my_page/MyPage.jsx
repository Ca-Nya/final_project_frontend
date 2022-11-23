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
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileImage } from "../../querys/my_page";
import { useDeleteDetailPost } from "../../querys/detail";
import Edit from "../../assets/icons/edit-profile.png";
import Comment from "../../assets/icons/comment.png";
import Heart from "../../assets/icons/heart.png";
import Write from "../../assets/icons/write.png";
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
			<Margin margin="43px 0 0 0">
				<Box variant="pofile">
					<Flex gap="1px" fd="column" ai="center">
						<Box>
							<Margin margin="16px 16px 0 206px">
								<Label htmlFor="imageChange">
									<Image
										variant="profile-edit"
										src={Edit}
										title="프로필이미지 편집"
									/>
								</Label>
							</Margin>
							<Input
								id="imageChange"
								variant="profile-edit"
								type="file"
								accept="image/*"
								onChange={handleChangeProfileImage}
							/>

							<Margin margin="11px 60px 0 60px">
								<Image
									src={memberProfileImage}
									alt={memberProfileImage}
									variant="mypage-profile"
								/>
							</Margin>
						</Box>
						<Margin margin="16px 60px 10px 60px">
							<Text variant="join">{nickname}</Text>
						</Margin>
						<Box>
							<Flex gap="10px">
								<Box variant="level">
									<Margin margin="4px 0 0 18px">
										<Text variant="level">Lv</Text>
									</Margin>
								</Box>
								<Margin margin="4px 0 0 0">
									<Text>톨 💛</Text>
								</Margin>
							</Flex>
						</Box>
						<hr size="1" width="202px" color="#EAEAEA"></hr>
						<Box>
						<Margin margin="10px 0 0 0">
							<Flex gap="20px">
								<Image src={Write} />
								<Image src={Heart} />
								<Image src={Comment} />
							</Flex>
							</Margin>
						</Box>
						<Margin margin="0 0 5px 3px">
							<Flex gap="11px">
								<Text variant="profile-base">내가쓴글</Text>
								<Text variant="profile-base">좋아요</Text>
								<Text variant="profile-base">작성댓글</Text>
							</Flex>
						</Margin>
						<Margin margin="0 5px 0 5px">
							<Flex gap="40px">
								<Text variant="join">{memberBoardCount}</Text>
								<Text variant="join">{memberHeartCount}</Text>
								<Text variant="join">{memberCommentCount}</Text>
							</Flex>
						</Margin>
					</Flex>
				</Box>
			</Margin>
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
			</Box>
		</Box>
	);
};

export default MyPage;

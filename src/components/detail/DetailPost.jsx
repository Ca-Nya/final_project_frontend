import {
	Box,
	Text,
	Button,
	FirstHeading,
	SecondHeading,
	DataList,
	DataDesc,
	DataTerm,
	Image,
} from "../../common";
import { CommentList, CommentItem } from "../../components/comment";
import { DetailLike } from "../../components/detail";
import { DetailMap, DetailRatings } from "../../components/detail";
import { useFetchDetailPost, useDeleteDetailPost } from "../../querys/detail";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useNavigate, useParams } from "react-router-dom";

const DetailPost = () => {
	// React Router
	const navigate = useNavigate();
	// 게시글 상세 페이지 파라미터
	const { id } = useParams();
	// 게시글 상세 페이지 정보 요청 hook
	const {
		data,
		isError,
		isLoading,
		refetch: detailpostRefetch,
	} = useFetchDetailPost(+id);
	console.log(
		"DetailPost data ===>",
		data,
		"isError =>",
		isError,
		"isLoading =>",
		isLoading,
	);
	// 별점을 담은 객체 배열화
	const ratings = [];
	for (let rate in data.rating) {
		ratings.push(data.rating[rate]);
	}
	// 게시글 삭제 요청 hook
	const { mutate: deletePostMutate } = useDeleteDetailPost();
	// 게시글 삭제 핸들러
	const handleDeletePost = () => {
		deletePostMutate(+id, {
			onSuccess: data => {
				console.log("useDeleteDetailPost data =>", data);
				alert("삭제가 완료되었습니다");
				navigate("/");
			},
			onError: error => {
				console.log("useDeleteDetailPost error =>", error);
				alert("삭제를 실패했습니다");
			},
		});
	};
	// 게시글 수정 핸들러
	const handleEditPost = () => {
		navigate(`/detail/edit/${+id}`);
	};

	if (isLoading) return <Box>로딩중..</Box>;
	if (isError) return <Box>에러입니다</Box>;

	return (
		<>
			{data ? (
				<Box>
					<DetailLike
						isLike={data.liked}
						boardId={+id}
						detailpostRefetch={detailpostRefetch}
					/>
					<Box>
						{/* 후에 전역 상태로 수정 */}
						{localStorage.getItem("Nickname") === data.memberNickname ? (
							<Box>
								<Button onClick={handleEditPost}>수정</Button>
								<Button onClick={handleDeletePost}>삭제</Button>
							</Box>
						) : (
							""
						)}
						<FirstHeading>{data.boardTitle}</FirstHeading>
						<DataList>
							<DataTerm>작성자</DataTerm>
							<DataList>{data.memberNickname}</DataList>
							<Image
								src={data.memberProfileImage}
								alt="프로필 이미지"
								variant="detail-review-profile"
							/>
							<DataTerm>작성일</DataTerm>
							<DataDesc>{data.date}</DataDesc>
						</DataList>
						<Box>
							<DataList>
								<DataTerm>좋아요 수</DataTerm>
								<Box variant="detail-heart-count">
									<FaHeart className={data.liked ? "liked" : ""} size="20" />
								</Box>
								<DataDesc>{data.heartCount}개</DataDesc>
							</DataList>
							<DataList>
								<DataTerm>평균점수</DataTerm>
								<DataDesc>{data.totalRating}</DataDesc>
							</DataList>
						</Box>
						<Box>
							<SecondHeading>이미지</SecondHeading>
							{data.imageList.map(({ imageUrl }) => {
								return (
									<Box key={imageUrl}>
										<Image
											src={imageUrl}
											alt="리뷰 이미지"
											variant="detail-review"
										/>
									</Box>
								);
							})}
						</Box>
						<Box>
							<SecondHeading>내용</SecondHeading>
							<Text>{data.boardContent}</Text>
						</Box>
						<Box>
							<SecondHeading>평점</SecondHeading>
							<DetailRatings ratings={ratings} />
						</Box>
						<Box>
							<SecondHeading>위치</SecondHeading>
							<DetailMap searchPlace={data.address} />
						</Box>
					</Box>
					<CommentItem />
					<CommentList />
				</Box>
			) : (
				<Box>불러올 페이지가 없습니다</Box>
			)}
		</>
	);
};

export default DetailPost;

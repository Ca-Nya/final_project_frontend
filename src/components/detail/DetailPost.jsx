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
import { DetailMap, DetailRatings } from "../../components/detail";
import { useFetchDetailPost, useDeleteDetailPost } from "../../querys";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useNavigate } from "react-router-dom";
import { CommentList, CommentItem } from "../../components/comment";
import { DetailLike } from "../../components/detail";

const DetailPost = () => {
	// React Router
	const navigate = useNavigate();
	const { data, isError, isLoading } = useFetchDetailPost();
	const { mutate: deletePostMutate } = useDeleteDetailPost();
	const ratings = [];
	const {
		address,
		boardContent,
		boardTitle,
		heartCount,
		imageList,
		rating,
		totalRating,
		memberNickname,
		memberProfileImg,
		liked,
	} = data;

	// 별점을 담은 객체 배열화
	for (let rate in rating) {
		ratings.push(rating[rate]);
	}

	if (isLoading) return <div>로딩중..</div>;

	if (isError) return <div>에러입니다</div>;

	return (
		<>
			<Box>
				{/* 후에 상태로 수정 */}
				{localStorage.getItem("Nickname") === memberNickname ? (
					<Box>
						<Button
							onClick={() => {
								navigate("/detail/edit");
							}}
						>
							수정
						</Button>

						<Button>수정</Button>

						<Button
							onClick={() => {
								deletePostMutate(11, {
									onSuccess: (data, variables, context) => {
										alert("삭제가 완료되었습니다");
										navigate("/");
									},
									onError: (error, variables, context) => {
										alert("삭제를 실패했습니다");
									},
									onSettled: (data, error, variables, context) => {},
								});
							}}
						>
							삭제
						</Button>
					</Box>
				) : (
					""
				)}
				<FirstHeading>{boardTitle}</FirstHeading>
				<DataList>
					<DataTerm>작성자</DataTerm>
					<DataList>{memberNickname}</DataList>
					<Image
						src={memberProfileImg}
						alt="프로필 이미지"
						variant="detail-review-profile"
					/>
					<DataTerm>작성일</DataTerm>
					<DataDesc>n월</DataDesc>
				</DataList>
				<Box>
					<DataList>
						<DataTerm>좋아요 수</DataTerm>
						<DataDesc>{heartCount}개</DataDesc>
						<Box variant="detail-heart-count">
							<FaHeart className={liked ? "liked" : ""} size="20" />
						</Box>
					</DataList>
					<DataList>
						<DataTerm>평균점수</DataTerm>
						<DataDesc>{totalRating}</DataDesc>
					</DataList>
				</Box>
				<Box>
					<SecondHeading>이미지</SecondHeading>
					{imageList.map(({ imageUrl }) => {
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
					<Text>{boardContent}</Text>
				</Box>
				<Box>
					<SecondHeading>평점</SecondHeading>
					<DetailRatings ratings={ratings} />
				</Box>
				<Box>
					<SecondHeading>위치</SecondHeading>

					<DetailMap searchPlace={address} />

					<DetailMap searchPlace={"스테이어도러블"} />
				</Box>
			</Box>
			<CommentItem />
			<CommentList />
			<DetailLike />
		</>
	);
};

export default DetailPost;

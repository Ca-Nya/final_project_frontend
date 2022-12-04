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
	Margin,
	Hidden,
	Flex,
} from "../../components";
import { CommentList, CommentItem } from "../../container/comment";
import { DetailLike } from "../../container/detail";
import { DetailMap, DetailRatings } from "../../container/detail";
import { useFetchDetailPost, useDeleteDetailPost } from "../../querys/detail";
import { useNavigate, useParams } from "react-router-dom";
// 캐러셀
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import prev_arrow from "../../assets/icons/prev_arrow.png";
import next_arrow from "../../assets/icons/next_arrow.png";

const DetailPost = () => {
	// 캐러셀 설정
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		pauseOnHover: true,
		nextArrow: (
			<NextArrow>
				<Image src={next_arrow} alt="next button" />
			</NextArrow>
		),
		prevArrow: (
			<PreArrow>
				<Image src={prev_arrow} alt="prev button" />
			</PreArrow>
		),
	};
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
				<Margin margin="160px 0 0 0">
					<Box variant="container">
						<Box variant="detail-container">
							{/* 후에 전역 상태로 수정 */}
							{localStorage.getItem("Nickname") === data.memberNickname ? (
								<Box>
									<Button onClick={handleEditPost}>수정</Button>
									<Button onClick={handleDeletePost}>삭제</Button>
								</Box>
							) : (
								""
							)}
							<FirstHeading variant="title">{data.boardTitle}</FirstHeading>
							<Box variant="detail-info">
								<Flex jc="flex-end" ai="center">
									<Flex ai="center" gap="9px">
										<Image
											src={data.memberProfileImage}
											alt="프로필 이미지"
											variant="small-profile"
										/>
										<DataList variant="">
											<Hidden>
												<DataTerm>작성자</DataTerm>
											</Hidden>
											<DataDesc variant="small-profile">
												{data.memberNickname}
											</DataDesc>
										</DataList>
									</Flex>
									<DataList variant="small-date">
										<Hidden>
											<DataTerm>작성일</DataTerm>
										</Hidden>
										<DataDesc>{data.date}</DataDesc>
									</DataList>
								</Flex>
							</Box>
							<Box variant="detail-content">
								<Flex gap="30px">
									<Box variant="detail-content-image-wraper">
										<StyledSlider {...settings}>
											{data.imageList.map(({ imageUrl }) => {
												return (
													<Image
														src={imageUrl}
														alt="리뷰 이미지"
														key={imageUrl}
														variant="detail-review"
													/>
												);
											})}
										</StyledSlider>
									</Box>
									<Box variant="detail-content-desc">
										<Text>{data.boardContent}</Text>
									</Box>
								</Flex>
							</Box>
							<SecondHeading variant="title">카냐인의 점수⭐️</SecondHeading>
							<Margin margin="20px 0 60px 0">
								<DetailRatings ratings={ratings} />
								<Margin margin="10px 0 0 0">
									<DataList variant="detail-rating">
										<Flex jc="center" ai="center" gap="10px">
											<DataTerm>카냐인의 평균 평점</DataTerm>
											<DataDesc>{data.totalRating}</DataDesc>
										</Flex>
									</DataList>
								</Margin>
							</Margin>
							<DetailMap searchPlace={data.address} />
							<Margin margin="40px 0 0 0">
								<Flex jc="flex-end">
									<DataList variant="detail-heart-count">
										<Flex ai="center" gap="5px">
											<DetailLike
												isLike={data.liked}
												boardId={+id}
												detailpostRefetch={detailpostRefetch}
											/>
											<DataTerm>좋아요</DataTerm>
											<DataDesc>{data.heartCount}</DataDesc>
										</Flex>
									</DataList>
								</Flex>
							</Margin>
						</Box>
						<Margin margin="30px 0 170px 0">
							<Box variant="comment-wrap">
								<CommentList />
								<CommentItem />
							</Box>
						</Margin>
					</Box>
				</Margin>
			) : (
				<Box>불러올 페이지가 없습니다</Box>
			)}
		</>
	);
};

const StyledSlider = styled(Slider)`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 4;
	background-color: aliceblue;
	.slick-prev::before,
	.slick-next::before {
		opacity: 0;
		display: none;
	}
`;

const PreArrow = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	left: 4%;
	z-index: 3;
`;

const NextArrow = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	right: 4%;
	z-index: 3;
`;

export default DetailPost;

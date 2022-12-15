import {
	Box,
	Text,
	Button,
	FirstHeading,
	DataList,
	DataDesc,
	DataTerm,
	Image,
	Hidden,
	Flex,
	Margin,
} from "../../../components";
import { DetailLike } from "../../../container/detail";
import styled from "styled-components";
// 캐러셀
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev_arrow from "../../../assets/icons/prev_arrow.png";
import next_arrow from "../../../assets/icons/next_arrow.png";

const Review = ({
	detailPostData,
	handleEditPost,
	handleDeletePost,
	detailPostRefetch,
	id,
}) => {
	// 캐러셀 설정
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
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

	return (
		<>
			<Flex ai="center">
				<FirstHeading variant="title">{detailPostData.boardTitle}</FirstHeading>
			</Flex>
			<Box variant="detail-info">
				<Flex jc="flex-end" ai="center">
					<Flex ai="center" gap="9px">
						<Box variant="profile-image">
							<Image
								src={detailPostData.memberProfileImage}
								alt="프로필 이미지"
								variant="medium-profile"
							/>
						</Box>
						<Flex fd="column" gap="3px">
							<DataList variant="">
								<Hidden>
									<DataTerm>작성자</DataTerm>
								</Hidden>
								<DataDesc variant="small-profile">
									{detailPostData.memberNickname}
								</DataDesc>
							</DataList>
							<DataList variant="detail-date">
								<Hidden>
									<DataTerm>작성일</DataTerm>
								</Hidden>
								<DataDesc>{detailPostData.date}</DataDesc>
							</DataList>
						</Flex>
						<Flex ai="center" jc="flex-end" gap="10px">
							{localStorage.getItem("Nickname") ===
							detailPostData.memberNickname ? (
								<Flex jc="flex-end" gap="4px">
									<Button variant="detail-edit" onClick={handleEditPost}>
										수정
									</Button>
									|
									<Button variant="detail-edit" onClick={handleDeletePost}>
										삭제
									</Button>
								</Flex>
							) : (
								""
							)}
							<DetailLike
								isLike={detailPostData.liked}
								boardId={+id}
								detailPostRefetch={detailPostRefetch}
								detailPostData={detailPostData}
							/>
						</Flex>
					</Flex>
				</Flex>
			</Box>
			<Box variant="detail-content">
				<Flex gap="30px">
					<Box variant="detail-content-image-wraper">
						<StyledSlider {...settings}>
							{detailPostData.imageList.map(({ imageUrl }) => {
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
						<Text>{detailPostData.boardContent}</Text>
					</Box>
				</Flex>
			</Box>
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

export default Review;

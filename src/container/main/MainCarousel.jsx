import { Box, Image, Strong, Flex, Button, Text } from "../../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
// image
import main1 from "../../assets/images/main_carousel1.png";
import main2 from "../../assets/images/main_carousel2.png";
import prev_arrow from "../../assets/icons/prev_arrow.png";
import next_arrow from "../../assets/icons/next_arrow.png";

const MainCarousel = () => {
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

	return (
		<Box variant="main-carousel">
			<StyledSlider {...settings}>
				{/* 하드코딩 후에 바꾸기 */}
				<Box variant="main-carousel-item" bg={main1}>
					<Box variant="main-carousel-item-desc">
						<Flex fd="column" jc="center" gap="50px">
							<Box>
								<Strong variant="main-carousel-rate">요즘 카페 어디가?</Strong>
								<Text variant="main-carousel-rate">
									핫한 카페를 찾고싶은 카페 유목민들을 위한
									<br />
									카냐인이 사랑하는 카페를 보고싶다면?
								</Text>
							</Box>
							<Button variant="main-carousel-rate">인기리뷰 보러가기</Button>
						</Flex>
					</Box>
				</Box>
				<Box variant="main-carousel-item" bg={main2}>
					<Box variant="main-carousel-item-desc">
						<Flex fd="column" jc="center" gap="50px">
							<Box>
								<Strong variant="main-carousel-hot">
									카페 맛집 어디가 좋아?
								</Strong>
								<Text variant="main-carousel-hot">
									커피, 디저트, 친절, 주차까지!
									<br />
									카테고리별 세세한 별점을 통해 취향 저격 카페 찾기
								</Text>
							</Box>
							<Button variant="main-carousel-hot">별점별리뷰 보러가기</Button>
						</Flex>
					</Box>
				</Box>
			</StyledSlider>
		</Box>
	);
};

const StyledSlider = styled(Slider)`
	height: 100%;
	width: 100vw;
	margin: 100px auto 0 auto;
	position: relative;
	z-index: 4;

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
	left: 9%;
	z-index: 3;
`;

const NextArrow = styled.div`
	width: 40px;
	height: 30px;
	position: absolute;
	right: 9%;
	z-index: 3;
`;

export default MainCarousel;

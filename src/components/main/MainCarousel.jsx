import { Box, Image, Strong, Flex } from "../../common";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
// image
import test1 from "../../assets/images/signin-background.png";
import test2 from "../../assets/images/signup-background.png";
import test3 from "../../assets/images/cafe.jpg";
import prev_arrow from "../../assets/icons/prev_arrow.png";
import next_arrow from "../../assets/icons/next_arrow.png";

const MainCarousel = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 9500,
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
				<Box variant="main-carousel-item" bg={test1}>
					<Flex jc="center" ai="center">
						<Strong variant="main-carousel">차분한 오후의 드립커피</Strong>
					</Flex>
				</Box>
				<Box variant="main-carousel-item" bg={test2}>
					<Flex jc="center" ai="center">
						<Strong variant="main-carousel">
							작은 카페에서 Bruno Major와 Mac Ayres
						</Strong>
					</Flex>
				</Box>
				<Box variant="main-carousel-item" bg={test3}>
					<Flex jc="center" ai="center">
						<Strong variant="main-carousel">
							여유로운 오후, 성수동 카페에서
						</Strong>
					</Flex>
				</Box>
			</StyledSlider>
		</Box>
	);
};

const StyledSlider = styled(Slider)`
	height: 100%;
	/* max-width: 1924px; */
	width: 100vw;
	margin: 0 auto;
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

export default MainCarousel;

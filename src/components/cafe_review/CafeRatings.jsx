import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { Fragment } from "react";
import { Box, Text, Flex, ThirdHeading } from "../../common";

const CafeRatings = ({ ratings, setRatings }) => {
	// 카페 별점
	const reviewRate = [
		["커피", 1, 2, 3, 4, 5],
		["디저트", 1, 2, 3, 4, 5],
		["가격", 1, 2, 3, 4, 5],
		["분위기", 1, 2, 3, 4, 5],
		["친절", 1, 2, 3, 4, 5],
		["주차", 1, 2, 3, 4, 5],
	];
	// 별점 클릭시 실행 핸들러
	// - 각 카테고리별 별점 rating state(props)에 추가
	const handleStarClick = (idx, star) => () => {
		setRatings(prev => {
			const newRate = [...prev];
			newRate.splice(idx, 1, star);
			return newRate;
		});
	};

	return (
		<Box variant="cafe-review-rating-wrap">
			{reviewRate.map((rateList, idx) => {
				return (
					<Box key={rateList[idx]} variant="cafe-review-rating-item">
						<Flex ai="center" jc="space-around">
							<Box variant="cafe-review-rating-title">
								<ThirdHeading variant="cafe-review-rating-title">
									{rateList[0]}
								</ThirdHeading>
							</Box>
							<Box variant="cafe-review-rating">
								<Flex jc="center" ai="center" gap="12px">
									{rateList.map((star, index) => {
										return (
											<Fragment key={Math.floor(Math.random() * 1000000)}>
												{index !== 0 ? (
													<FaStar
														onClick={handleStarClick(idx, star)}
														className={
															rateList[index] <= ratings[idx] ? "active" : ""
														}
														size="45"
													/>
												) : (
													""
												)}
											</Fragment>
										);
									})}
								</Flex>
							</Box>
							<Box variant="cafe-review-rating-info">
								<Text variant="cafe-review-rating-info">
									{ratings[idx] === 5
										? "아주 좋아요"
										: ratings[idx] === 4
										? "맘에 들어요"
										: ratings[idx] === 3
										? "보통이에요"
										: ratings[idx] === 2
										? "그냥 그래요"
										: ratings[idx] === 1
										? "별로에요"
										: "완전 별로에요"}
								</Text>
							</Box>
						</Flex>
					</Box>
				);
			})}
		</Box>
	);
};

export default CafeRatings;

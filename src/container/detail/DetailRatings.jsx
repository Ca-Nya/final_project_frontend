import { Box, Text, Flex, ThirdHeading, Image } from "../../components";
import {
	coffee,
	dessert,
	kindness,
	mood,
	parking,
	price,
} from "../../assets/icons/fields";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { Fragment } from "react";

const DetailRatings = ({ ratings }) => {
	// 카페 별점
	const reviewRate = [
		[coffee, "커피", 1, 2, 3, 4, 5],
		[dessert, "디저트", 1, 2, 3, 4, 5],
		[price, "가격", 1, 2, 3, 4, 5],
		[mood, "분위기", 1, 2, 3, 4, 5],
		[kindness, "친절", 1, 2, 3, 4, 5],
		[parking, "주차", 1, 2, 3, 4, 5],
	];

	return (
		<Box variant="cafe-review-rating-wrap">
			{reviewRate.map((rateList, idx) => {
				return (
					<Box key={rateList[idx]} variant="cafe-review-rating-item">
						<Flex ai="center" jc="space-around">
							<Box variant="cafe-review-rating-title">
								<Image
									src={rateList[0]}
									alt={rateList[1]}
									variant="cafe-review-rating-item"
								/>
								<ThirdHeading variant="cafe-review-rating-title">
									{rateList[1]}
								</ThirdHeading>
							</Box>
							<Box variant="cafe-detail-rating">
								<Flex jc="center" ai="center" gap="12px">
									{rateList.map((star, index) => {
										return (
											<Fragment key={Math.floor(Math.random() * 1000000)}>
												{index !== 0 && index !== 1 ? (
													<FaStar
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

// const reviewRate = [
// 	["커피", 1, 2, 3, 4, 5],
// 	["디저트", 1, 2, 3, 4, 5],
// 	["가격", 1, 2, 3, 4, 5],
// 	["분위기", 1, 2, 3, 4, 5],
// 	["친절", 1, 2, 3, 4, 5],
// 	["주차", 1, 2, 3, 4, 5],
// ];
// console.log("ratings =>", ratings);

// return (
// 	<Box>
// 		{reviewRate.map((rateList, idx) => {
// 			return (
// 				<Margin key={Math.floor(Math.random() * 100000)} margin="20px">
// 					<Box variant="detail-rating-box">
// 						<Box>
// 							{rateList.map((star, index) => {
// 								if (index === 0) {
// 									return <Box key={rateList[0]}>{rateList[0]}</Box>;
// 								}
// 								return (
// 									<Text key={Math.floor(Math.random() * 100000)}>
// 										<FaStar
// 											className={
// 												rateList[index] <= ratings[idx] ? "active" : ""
// 											}
// 											size="30"
// 										/>
// 									</Text>
// 								);
// 							})}
// 							<Box>
// 								{ratings[idx] === 5
// 									? "아주좋아요"
// 									: ratings[idx] === 4
// 									? "맘에들어요"
// 									: ratings[idx] === 3
// 									? "보통이에요"
// 									: ratings[idx] === 2
// 									? "그냥 그래요"
// 									: ratings[idx] === 1
// 									? "별로에요"
// 									: "완전 별로에요"}
// 							</Box>
// 						</Box>
// 					</Box>
// 				</Margin>
// 			);
// 		})}
// 	</Box>
// );

export default DetailRatings;

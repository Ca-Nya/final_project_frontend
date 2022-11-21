import { Box, Margin, Text } from "../../common";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const DetailRatings = ({ ratings }) => {
	const reviewRate = [
		["커피", 1, 2, 3, 4, 5],
		["디저트", 1, 2, 3, 4, 5],
		["가격", 1, 2, 3, 4, 5],
		["분위기", 1, 2, 3, 4, 5],
		["친절", 1, 2, 3, 4, 5],
		["주차", 1, 2, 3, 4, 5],
	];
	console.log("ratings =>", ratings);

	return (
		<Box>
			{reviewRate.map((rateList, idx) => {
				return (
					<Margin key={Math.floor(Math.random() * 100000)} margin="20px">
						<Box variant="detail-rating-box">
							<Box>
								{rateList.map((star, index) => {
									if (index === 0) {
										return <Box key={rateList[0]}>{rateList[0]}</Box>;
									}
									return (
										<Text key={Math.floor(Math.random() * 100000)}>
											<FaStar
												className={
													rateList[index] <= ratings[idx] ? "active" : ""
												}
												size="30"
											/>
										</Text>
									);
								})}
								<Box>
									{ratings[idx] === 5
										? "아주좋아요"
										: ratings[idx] === 4
										? "맘에들어요"
										: ratings[idx] === 3
										? "보통이에요"
										: ratings[idx] === 2
										? "그냥 그래요"
										: ratings[idx] === 1
										? "별로에요"
										: "완전 별로에요"}
								</Box>
							</Box>
						</Box>
					</Margin>
				);
			})}
		</Box>
	);
};

export default DetailRatings;

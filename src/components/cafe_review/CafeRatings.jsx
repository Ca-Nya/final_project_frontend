import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { Box, Margin, Text } from "../../common";

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
		<Box>
			{reviewRate.map((rateList, idx) => {
				return (
					<Margin key={rateList[idx]} margin="20px">
						<Box>
							<Box variant="cafe-review-rating-box">
								{rateList.map((star, index) => {
									if (index === 0) {
										return <Box key={rateList[0]}>{rateList[0]}</Box>;
									}
									return (
										<FaStar
											key={Math.floor(Math.random() * 1000000)}
											onClick={handleStarClick(idx, star)}
											className={
												rateList[index] <= ratings[idx] ? "active" : ""
											}
											size="30"
										/>
									);
								})}
							</Box>
							<Box>
								<Text>
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
								</Text>
							</Box>
						</Box>
					</Margin>
				);
			})}
		</Box>
	);
};

export default CafeRatings;

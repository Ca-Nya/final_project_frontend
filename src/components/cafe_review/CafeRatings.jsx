import { ImStarFull } from "react-icons/im";
import { Box, Margin } from "../../common";
import { useState } from "react";

const CafeRatings = ({ ratings, setRatings }) => {
	const reviewRate = [
		["coffeRate", 1, 2, 3, 4, 5],
		["dessertRate", 1, 2, 3, 4, 5],
		["priceRate", 1, 2, 3, 4, 5],
		["moodRate", 1, 2, 3, 4, 5],
		["kindnessRate", 1, 2, 3, 4, 5],
		["parkingRate", 1, 2, 3, 4, 5],
	];

	const handleStarClick = (idx, star) => () => {
		setRatings(prev => {
			const newRate = [...prev];
			newRate.splice(idx, 1, star);
			return newRate;
		});
	};

	console.log("ratings =>", ratings);

	return (
		<Box>
			{reviewRate.map((rateList, idx) => {
				return (
					<Margin key={rateList[idx]} margin="20px">
						<Box variant="rating-box">
							<Box>
								{rateList.map((star, index) => {
									return (
										<span key={Math.floor(Math.random() * 100000)}>
											{index !== 0 ? (
												<ImStarFull
													onClick={handleStarClick(idx, star)}
													className={
														rateList[index] <= ratings[idx] ? "active" : ""
													}
													size="40"
												/>
											) : (
												""
											)}
										</span>
									);
								})}
							</Box>
						</Box>
					</Margin>
				);
			})}
		</Box>
	);
};

export default CafeRatings;

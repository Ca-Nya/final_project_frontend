import { ImStarFull } from "react-icons/im";
import { Box, Margin } from "../../common";
import { useState } from "react";

const CafeRatings = () => {
	// const [reviewRate, setReviewRate] = useState([
	//   [false, false, false, false, false],
	//   [false, false, false, false, false],
	//   [false, false, false, false, false],
	//   [false, false, false, false, false],
	//   [false, false, false, false, false],
	//   [false, false, false, false, false],
	// ]);

	const [reviewRate, setReviewRate] = useState([
		["coffeRate", 1, 2, 3, 4, 5],
		["dessertRate", 1, 2, 3, 4, 5],
		["priceRate", 1, 2, 3, 4, 5],
		["moodRate", 1, 2, 3, 4, 5],
		["kindnessRate", 1, 2, 3, 4, 5],
		["parkingRate", 1, 2, 3, 4, 5],
	]);

	const [rate, setRate] = useState([0, 0, 0, 0, 0, 0]);

	console.log("rate =>", rate);

	// const handleStarClick = (star, idx) => {
	//   let starClickstate = [...reviewRate[idx]];
	//   for (let i = 0; i < 5; i++) {
	//     starClickstate[i] = i <= star ? true : false;
	//   }
	//   setReviewRate((prev) => {
	//     const filterdReviewRate = [...prev];
	//     filterdReviewRate.splice(idx, 1, starClickstate);
	//     return filterdReviewRate;
	//   });
	// };

	const handleStarClick = (starIndex, idx) => {
		let starClickstate = [...reviewRate[idx]];
		setReviewRate(prev => {
			const filterdReviewRate = [...prev];
			filterdReviewRate.splice(idx, 1, starClickstate);
			return filterdReviewRate;
		});
	};

	return (
		<Box>
			{reviewRate.map((rateList, idx) => {
				return (
					<>
						{idx !== 0 ? (
							<Margin key={`rating_${idx}`} margin="20px">
								<Box variant="rating-box">
									<Box>
										{rateList.map((star, index) => {
											return (
												<ImStarFull
													key={star}
													onClick={() =>
														setRate(prev => {
															const newRate = [...prev];
															newRate.splice(idx, 1, star);
															return newRate;
														})
													}
													className={
														rateList[index++] <= rate[idx] ? "active" : ""
													}
													size="40"
												/>
											);
										})}
									</Box>
								</Box>
							</Margin>
						) : (
							""
						)}
					</>
				);
			})}
		</Box>
	);

	// return (
	//   <Box>
	//     {reviewRate.map((rateList, idx) => {
	//       return (
	//         <Margin key={idx} margin="20px">
	//           <Box variant="rating-box">
	//             <Box>
	//               {[0, 1, 2, 3, 4].map((star) => {
	//                 return (
	//                   <ImStarFull
	//                     key={star}
	//                     onClick={() => handleStarClick(star, idx)}
	//                     className={rateList[star] && "active"}
	//                     size="40"
	//                   />
	//                 );
	//               })}
	//             </Box>
	//           </Box>
	//         </Margin>
	//       );
	//     })}
	//   </Box>
	// );
};

export default CafeRatings;

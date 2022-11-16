import { ImStarFull } from "react-icons/im";
import { Box, Margin } from "../../common";

const DetailRatings = ({ ratings }) => {
	const reviewRate = [
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
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
									return (
										<span key={Math.floor(Math.random() * 100000)}>
											<ImStarFull
												className={
													rateList[index] <= ratings[idx] ? "active" : ""
												}
												size="30"
											/>
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

export default DetailRatings;

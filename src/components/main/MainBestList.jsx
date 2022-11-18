import { Box, SecondHeading } from "../../common";

const MainBestList = ({ bestDto }) => {
	return (
		<Box>
			{bestDto.map(best => {
				return (
					<Box key={best.boardId}>
						<Box bg={best.imageUrl} variant="main-best-item">
							<SecondHeading>{best.boardTitle}</SecondHeading>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default MainBestList;

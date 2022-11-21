import { Box, SecondHeading, DataList, DataTerm, DataDesc } from "../../common";

const MainAllList = ({ allDto }) => {
	return (
		<Box>
			{allDto.map(allItem => {
				return (
					<Box key={allItem.boardId}>
						<Box bg={allItem.imageUrl} variant="main-all-item" />
						<Box>
							<SecondHeading>{allItem.address}</SecondHeading>
							<DataList>
								<DataTerm>평균 평점</DataTerm>
								<DataDesc>{allItem.totalRating}</DataDesc>
							</DataList>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default MainAllList;

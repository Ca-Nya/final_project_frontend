import { Box, ThirdHeading, SecondHeading } from "../../common";

const MainNewList = ({ newDto }) => {
	return (
		<Box>
			{newDto.map(newPost => {
				return (
					<Box key={newPost.boardId}>
						<Box>
							<ThirdHeading>new</ThirdHeading>
							<SecondHeading>{newPost.address}</SecondHeading>
							<Box bg={newPost.imageUrl} variant="main-new-item" />
							<Box>테그들</Box>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default MainNewList;

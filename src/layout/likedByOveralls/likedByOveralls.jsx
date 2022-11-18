import { Box, FirstHeading } from "../../common";
import { Outlet } from "react-router-dom";

const likedByOveralls = () => {
	return (
		<Box>
			<FirstHeading>최신인기전체리스트</FirstHeading>
			<Outlet></Outlet>
		</Box>
	);
};

export default likedByOveralls;

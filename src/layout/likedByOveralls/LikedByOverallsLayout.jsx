import { Box } from "../../common";
import { Outlet } from "react-router-dom";
import { LikedByOveralls } from "../../components/likedByOveralls";

const LikedByOverallsLayout = () => {
	return (
		<Box>
			<LikedByOveralls />
			<Outlet></Outlet>
		</Box>
	);
};

export default LikedByOverallsLayout;

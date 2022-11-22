import { Box } from "../../common";
import { Outlet } from "react-router-dom";

const LikedByOverallsLayout = () => {
	return (
		<Box>
			<Outlet></Outlet>
		</Box>
	);
};

export default LikedByOverallsLayout;

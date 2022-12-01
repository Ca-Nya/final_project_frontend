import { Box } from "../../components";
import { Outlet } from "react-router-dom";

const LikedByFieldsLayout = () => {
	return (
		<Box>
			<Outlet></Outlet>
		</Box>
	);
};

export default LikedByFieldsLayout;

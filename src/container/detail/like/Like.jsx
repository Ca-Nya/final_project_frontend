import { Box, Button } from "../../../components";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

const Like = ({ handleLike, isLike }) => {
	return (
		<Box variant="detail-heart">
			<Button onClick={handleLike}>
				<FaHeart className={isLike ? "liked" : ""} size="33" />
			</Button>
		</Box>
	);
};

export default Like;

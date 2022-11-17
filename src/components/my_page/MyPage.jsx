import MyComment from "./MyComment";
import MYBoard from "./MyBoard";
import MyLike from "./MyLike";
import { Box, Input, Button, Form } from "../../common";

const MyPage = () => {
	return (
		<Box>
			<MyLike />
			<MYBoard />
			<MyComment />
		</Box>
	);
};

export default MyPage;

import { Box, Button } from "../../common";
import { useNavigate } from "react-router-dom";

const MainNavButtons = () => {
	// React Router
	const navigate = useNavigate();

	return (
		<Box>
			<Button
				onClick={() => {
					navigate("/overals/recent");
				}}
			>
				최신리뷰
			</Button>
			<Button
				onClick={() => {
					navigate("/overal/hot");
				}}
			>
				인기리뷰
			</Button>
			<Button
				onClick={() => {
					navigate("/overals/all");
				}}
			>
				전체리뷰
			</Button>
			<Button
				onClick={() => {
					navigate("/fields/price");
				}}
			>
				가성비맛집
			</Button>
			<Button
				onClick={() => {
					navigate("/fields/mood");
				}}
			>
				분위기맛집
			</Button>
			<Button
				onClick={() => {
					navigate("/fields/coffee");
				}}
			>
				커피맛집
			</Button>
			<Button
				onClick={() => {
					navigate("/fields/dessert");
				}}
			>
				디저트맛집
			</Button>
			<Button
				onClick={() => {
					navigate("/fields/kindness");
				}}
			>
				친절맛집
			</Button>
			<Button
				onClick={() => {
					navigate("/fields/parking");
				}}
			>
				주차맛집
			</Button>
		</Box>
	);
};

export default MainNavButtons;

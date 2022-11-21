import { Box, Button } from "../../common";

const MainCanyaButtons = ({ setCanyaPick, mainPosts }) => {
	// 카냐's Pick 게시글 변경 이벤트 핸들러
	const handleChangeCanyaPick = e => {
		console.log("mainPosts[e.target.vaule] =>", mainPosts[e.target.value]);
		setCanyaPick(mainPosts[e.target.value]);
	};

	return (
		<Box>
			<Button value="coffeePick" onClick={handleChangeCanyaPick}>
				coffe
			</Button>
			<Button value="dessertPick" onClick={handleChangeCanyaPick}>
				desert
			</Button>
			<Button value="moodPick" onClick={handleChangeCanyaPick}>
				mood
			</Button>
		</Box>
	);
};

export default MainCanyaButtons;

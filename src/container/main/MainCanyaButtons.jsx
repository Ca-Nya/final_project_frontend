import { Box, Button, Flex } from "../../components";
import { useState } from "react";

const MainCanyaButtons = ({ setCanyaPick, mainPosts }) => {
	// 카냐's Pick 버튼 리스트
	const canyaPicks = [
		["coffeePick", "coffee"],
		["dessertPick", "dessert"],
		["moodPick", "mood"],
	];
	// 카냐's Pick 버튼 클릭 state
	const [currentPick, setCurrentPick] = useState([true, false, false]);
	// 카냐's Pick 게시글 변경 이벤트 핸들러
	const handleChangeCanyaPick = idx => {
		return e => {
			setCanyaPick(mainPosts[e.target.value]);
			setCurrentPick(prev => {
				const newCurrentPick = [...prev].map((_, index) =>
					index === idx ? true : false,
				);
				return newCurrentPick;
			});
		};
	};

	return (
		<Box>
			<Flex gap="40px" jc="center" ai="center">
				{canyaPicks.map((pick, idx) => {
					return (
						<Button
							key={pick}
							value={pick[0]}
							onClick={handleChangeCanyaPick(idx)}
							variant="main-canya-pick-nav"
							pick={currentPick[idx]}
						>
							{pick[1]}
						</Button>
					);
				})}
			</Flex>
		</Box>
	);
};

export default MainCanyaButtons;

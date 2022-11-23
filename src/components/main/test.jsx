import {
	Box,
	ListItem,
	ThirdHeading,
	UnOrderedList,
	Margin,
	Flex,
} from "../../common";
import { useState } from "react";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import { IoMdArrowDropup } from "@react-icons/all-files/io/IoMdArrowDropup";

const Test = () => {
	const selectList = [
		["all", "통합검색"],
		["memberNickname", "글쓴이"],
		["boardTitle", "글제목"],
		["boardContent", "글내용"],
	];
	const [selectValues, setSelectValue] = useState({
		category: "all",
		keyword: "",
	});
	console.log("selectValue =>", selectValues);
	const [selectCategory, setSelectCategory] = useState("통합검색");
	console.log("selectCategory =>", selectCategory);
	// 검색 select option 변경 핸들러
	const handleChangeSelect = e => {
		const [selectValue, newSelectCategory] = selectList.filter((_, index) => {
			if (index === e.target.value) return true;
		})[0];
		setSelectCategory(newSelectCategory);
		console.log("selectValue =>", selectValue);
		setSelectValue(prev => {
			return {
				...prev,
				category: selectValue,
			};
		});
	};
	const [selectBoxView, setSelectBoxView] = useState(false);
	console.log("selectBoxView =>", selectBoxView);

	return (
		<Box variant="main-selcet-wraper">
			<Box variant="main-selcet-preview-wraper">
				<Flex jc="center" ai="center">
					<ThirdHeading variant="main-select-preview">
						{selectCategory}
					</ThirdHeading>
				</Flex>
			</Box>
			<UnOrderedList
				variant="main-select"
				onClick={() => setSelectBoxView(!selectBoxView)}
			>
				<Flex fd="column" jc="center" ai="center">
					<Box variant="select-icon-wraper">
						{selectBoxView ? (
							<IoMdArrowDropup size="22" />
						) : (
							<IoMdArrowDropdown size="22" />
						)}
					</Box>
					{selectBoxView
						? selectList.map((option, idx) => {
								return (
									<ListItem
										variant="main-select"
										key={option[1]}
										value={idx}
										onClick={handleChangeSelect}
									>
										{option[1]}
									</ListItem>
								);
						  })
						: ""}
				</Flex>
			</UnOrderedList>
		</Box>
	);
};

export default Test;

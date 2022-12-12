import {
	Box,
	ListItem,
	ThirdHeading,
	UnOrderedList,
	Flex,
} from "../../components";
import { useState } from "react";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import { IoMdArrowDropup } from "@react-icons/all-files/io/IoMdArrowDropup";

const MainSelectBox = ({ setSelectValue }) => {
	// 셀렉트박스 카테고리 배열
	const selectList = [
		["boardTitle", "글제목"],
		["memberNickname", "글쓴이"],
		["boardContent", "글내용"],
	];
	// 카테고리 선택시 미리보기 state
	const [selectCategory, setSelectCategory] = useState("글제목");
	// 셀렉트 박스 화면 출력 state
	const [selectBoxView, setSelectBoxView] = useState(false);
	// 검색 select option 변경 핸들러
	const handleChangeSelect = e => {
		const [selectValue, newSelectCategory] = selectList.filter((_, index) => {
			if (index === e.target.value) return true;
		})[0];
		setSelectCategory(newSelectCategory);
		setSelectValue(prev => {
			return {
				...prev,
				category: selectValue,
			};
		});
	};

	return (
		<Box variant="main-search-wraper">
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
		</Box>
	);
};

export default MainSelectBox;

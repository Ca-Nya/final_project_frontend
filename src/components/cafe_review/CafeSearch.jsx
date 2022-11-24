import { useState } from "react";
import { CafeMap } from "../../components/cafe_review";
import { Form, Input, Button } from "../../common";

const CafeSearch = ({ place, setPlace }) => {
	// 검색 값 state
	const [inputText, setInputText] = useState("");
	// 검색 값 저장 핸들러
	const handleChangePlaceValue = e => {
		setInputText(e.target.value);
	};
	// 검색 핸들러
	const handleSubmit = e => {
		e.preventDefault();
		setPlace(inputText);
		setInputText("");
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder="원하시는 카페를 검색해주세요"
					onChange={handleChangePlaceValue}
					value={inputText}
				/>
				<Button type="submit">검색</Button>
			</Form>
			<CafeMap searchPlace={place} />
		</>
	);
};

export default CafeSearch;

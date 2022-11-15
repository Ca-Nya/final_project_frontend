import { useState } from "react";
import { CafeMap } from "../../components/cafe_review";

const CafeSearch = ({ place, setPlace }) => {
	const [inputText, setInputText] = useState("");
	const onChange = e => {
		setInputText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setPlace(inputText);
		setInputText("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="원하시는 카페를 검색해주세요"
					onChange={onChange}
					value={inputText}
				/>
				<button type="submit">검색</button>
			</form>
			<CafeMap searchPlace={place} />
		</>
	);
};

export default CafeSearch;

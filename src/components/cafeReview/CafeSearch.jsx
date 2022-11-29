import { useState } from "react";
import { CafeMap } from "../../components/cafeReview";
import { Form, Input, Button, Flex, Margin } from "../../common";

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
			<Margin margin="0 0 30px 0">
				<Form onSubmit={handleSubmit}>
					<Flex gap="10px">
						<Input
							placeholder="다녀오신 카페를 검색해주세요."
							onChange={handleChangePlaceValue}
							value={inputText}
							variant="cafe-review-search"
						/>
						<Button type="submit" variant="cafe-review-search">
							검색
						</Button>
					</Flex>
				</Form>
			</Margin>
			<CafeMap searchPlace={place} />
		</>
	);
};

export default CafeSearch;

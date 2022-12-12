import { useState } from "react";
import { CafeMap } from "../../container/cafeReview";
import {
	Form,
	Input,
	Button,
	Flex,
	Margin,
	SecondHeading,
} from "../../components";

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
		setPlace(prev => {
			return {
				...prev,
				address: inputText,
				addressId: "",
			};
		});
		setInputText("");
	};

	return (
		<>
			<Margin margin="0 0 30px 0">
				<Margin margin="60px 0 25px 0">
					<SecondHeading variant="title">카페등록☕️</SecondHeading>
				</Margin>
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
			<CafeMap searchPlace={place} setPlace={setPlace} />
		</>
	);
};

export default CafeSearch;

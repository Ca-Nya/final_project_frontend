import {
	Input,
	Button,
	Margin,
	Flex,
	SecondHeading,
	Form,
} from "../../../components";
import { CafeMap } from "../../../container/cafeReview";

const Search = ({
	onSubmit,
	onChangePlaceValue,
	inputText,
	place,
	setPlace,
}) => {
	console.log("searchPlace ==>", place);

	return (
		<>
			<Margin margin="60px 0 25px 0">
				<SecondHeading variant="title">카페등록☕️</SecondHeading>
			</Margin>
			<Margin margin="0 0 30px 0">
				<Form onSubmit={onSubmit}>
					<Flex gap="10px">
						<Input
							placeholder="다녀오신 카페를 검색해주세요."
							onChange={onChangePlaceValue}
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

export default Search;

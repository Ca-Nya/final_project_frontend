import { Button, Margin, Flex } from "../../../components";

const Submit = ({ onPostReview }) => {
	return (
		<Margin margin="98px 0 200px 0">
			<Flex jc="center" ai="center">
				<Button type="button" onClick={onPostReview} variant="cafe-review-post">
					리뷰 등록하기
				</Button>
			</Flex>
		</Margin>
	);
};

export default Submit;

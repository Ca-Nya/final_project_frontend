import { Box, Flex, Strong } from "../../components";

const WarningException = () => {
	return (
		<Box variant="spinner-wrap">
			<Flex jc="center" ai="center">
				<Strong variant="warning">작성된 리뷰가 없습니다😞</Strong>
			</Flex>
		</Box>
	);
};

export default WarningException;

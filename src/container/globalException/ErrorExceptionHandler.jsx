import { Box, Flex, Strong, Button } from "../../components";
import { useNavigate } from "react-router-dom";

const ErrorExceptionHandler = () => {
	// React Router
	const navigate = useNavigate();

	return (
		<Box variant="spinner-wrap">
			<Flex fd="column" jc="center" ai="center" gap="100px">
				<Strong variant="warning">
					에러입니다.😭 빠른 시일 내에 해결하겠습니다.
				</Strong>
				<Button onClick={() => navigate(-1)} variant="cafe-review-post">
					돌아가기
				</Button>
			</Flex>
		</Box>
	);
};

export default ErrorExceptionHandler;

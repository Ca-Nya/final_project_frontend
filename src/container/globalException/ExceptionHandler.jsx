import { Box, Flex, Image } from "../../components";
// 로딩 스피너
import spinner from "../../assets/icons/spinner.gif";

const ExceptionHandler = () => {
	return (
		<Box variant="spinner-wrap">
			<Flex jc="center" ai="center">
				<Image src={spinner} alt="로딩중" variant="spinner" />
			</Flex>
		</Box>
	);
};

export default ExceptionHandler;

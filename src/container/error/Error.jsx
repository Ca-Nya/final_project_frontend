import error from "../../assets/icons/404.png";
import { Image, Box, Flex, Strong, Text, Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Error = () => {
	// React Router
	const navigate = useNavigate();

	return (
		<Box variant="error-wrap">
			<Flex fd="column" jc="center" ai="center" gap="50px">
				<Image src={error} alt="404 에러 알림 이미지" />

				<Box>
					<Flex fd="column" jc="center" ai="center" gap="17px">
						<Strong variant="error">요청한 페이지를 찾을 수 없습니다.😞</Strong>
						<Text variant="error">주소를 확인하신 후 다시 이용해주세요.</Text>
					</Flex>
				</Box>

				<Button onClick={() => navigate("/")} variant="error">
					홈으로
				</Button>
			</Flex>
		</Box>
	);
};

export default Error;

import { Box, Image, Margin, Text } from "../../../components";

const MblComment = ({ item }) => {
	return (
		<Box size="container">
			<Text>{item.memberNickname}</Text>
			<Text>{item.communityCommentContent}</Text>
			<Image src={item.memberProfileImage} />
			<Text>{item.date}</Text>
		</Box>
	);
};

export default MblComment;

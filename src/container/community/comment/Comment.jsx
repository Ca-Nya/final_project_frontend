import {
	Box,
	Image,
	Margin,
	Text,
	DataList,
	Flex,
	DataDesc,
	DataTerm,
	SecondHeading,
	Hidden,
} from "../../../components";
import ComuCommentEdit from "../ComuCommentEdit";

const Comment = ({ item }) => {
	return (
		<Box>
			<Margin margin="10px 0">
				<Flex jc="space-between" ai="center" gap="17px">
					<Box>
						<Flex jc="center" ai="center" gap="10px">
							<Box>
								<Flex ai="center" jc="center">
									<Image
										src={item.memberProfileImage}
										alt="유저 프로필"
										variant="comment-profile"
									/>
								</Flex>
							</Box>
							<Box variant="comment-user-info">
								<Flex fd="column" jc="center" gap="7px">
									<SecondHeading variant="comment-user-nickname">
										{item.memberNickname}
									</SecondHeading>
									<Text variant="comment-user-content">
										{item.communityCommentContent}
									</Text>
								</Flex>
							</Box>
						</Flex>
					</Box>
					<Box variant="comment-info">
						<Flex fd="column" jc="center" ai="flex-end" gap="10px">
							<DataList variant="comment-date">
								<Hidden>
									<DataTerm>작성일</DataTerm>
								</Hidden>
								<DataDesc>{item.date}</DataDesc>
							</DataList>
						</Flex>
					</Box>
				</Flex>
			</Margin>			
		</Box>
	);
};

export default Comment;

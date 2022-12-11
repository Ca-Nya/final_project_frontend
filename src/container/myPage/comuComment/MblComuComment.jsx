import {
	Box,
	Input,
	Button,
	Image,
	Text,
	Margin,
	Flex,
} from "../../../components";

const MblComuComment = ({
	edit,
	setEdit,
	editComment,
	navigate,
	comment,
	onDeleteComment,
	onEditComment,
	onhandleEdit,
	ondelMutation,
}) => {
	return (
		<Box>
			{edit ? (
				<Box size="container-comment">
					<Margin margin="0 0 10px 0">
						<Box>
							<Margin margin="17px 22px 0 22px">
								<Box>
									<Flex jc="space-between">
										<Input
											size="xs"
											type="text"
											name="commentContent"
											defaultValue={comment?.communityCommentContent}
											required={comment?.communityCommentContent}
											onChange={onhandleEdit}
										/>
										<Text size="s">
											{comment?.communityCommentCreatedAt}
										</Text>
									</Flex>
								</Box>
							</Margin>
							<Margin margin="10px 20px 0 22px">
								<Box>
									<Flex gap="10px" jc="space-between">
										<Text
											size="m"
											onClick={() => {
												navigate(`/community/${comment?.communityId}`);
											}}
										>
											{comment?.communityTitle}
										</Text>
										<Box>
											<Text size="m"  onClick={onEditComment}>
												완료
											</Text>
										</Box>
									</Flex>
								</Box>
							</Margin>
						</Box>
					</Margin>
				</Box>
			) : (
				<Box>
					<Margin margin="0 0 10px 0">
						<Box size="container-comment">
							<Margin margin="17px auto">
								<Box variant="guide">
									<Flex jc="space-between">
										<Text size="l">
											{comment?.communityCommentContent}
										</Text>
										<Text size="s">
											{comment?.communityCommentCreatedAt}
										</Text>
									</Flex>
								</Box>
							</Margin>
							<Margin margin="10px auto">
								<Box>
									<Flex gap="10px" jc="space-between">
										<Text
											size="m"
											onClick={() => {
												navigate(`/community/${comment?.communityId}`);
											}}
										>
											{comment?.communityTitle}
										</Text>
										<Box>
                                            <Flex gap="6px">
											<Text
												size="m"
												onClick={() => {
													setEdit(!edit);
												}}
											>
												수정
											</Text>
											<Text size="m" onClick={onDeleteComment}>
												삭제
											</Text>
                                            </Flex>
										</Box>
									</Flex>
								</Box>
							</Margin>
						</Box>
					</Margin>
				</Box>
			)}
		</Box>
	);
};

export default MblComuComment;

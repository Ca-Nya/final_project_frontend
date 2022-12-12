import {
	Box,
	Input,
	Button,
	Image,
	DataList,
	DataTerm,
	DataDesc,
	Text,
	Hidden,
	SecondHeading,
	Flex,
	Margin,
	TextArea,
} from "../../../components";

const CommentEdit = ({
	item,
	edit,
	setEdit,
	handleEdit,
	handleEditComplete,
	handleRemove,
	nickname,
}) => {
	return (
		<Box variant="comment-item-wrap">
			{item.memberNickname === nickname ? (
				<Box>
					{edit ? (
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
												<Flex fd="column" jc="center">
													<TextArea
														name="commentContent"
														defaultValue={item?.communityCommentContent}
														required={item?.communityCommentContent}
														onChange={handleEdit}
														variant="comment-edit-input"
													/>
												</Flex>
											</Box>
										</Flex>
									</Box>
									<Box variant="comment-info">
										<Flex fd="column" jc="center" ai="flex-end">
											<Button
												onClick={handleEditComplete}
												variant="comment-edit"
											>
												완료
											</Button>
										</Flex>
									</Box>
								</Flex>
							</Margin>
						</Box>
					) : (
						<>
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
											<Box>
												<Flex jc="flex-end" gap="30px">
													<Button
														onClick={() => {
															setEdit(!edit);
														}}
														variant="comment-edit"
													>
														수정
													</Button>
													<Button
														onClick={handleRemove}
														variant="comment-delete"
														handleEditCompletes
													>
														삭제
													</Button>
												</Flex>
											</Box>
										</Flex>
									</Box>
								</Flex>
							</Margin>
						</>
					)}
				</Box>
			) : (
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
			)}
		</Box>
	);
};

export default CommentEdit;

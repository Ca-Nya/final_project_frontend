import { Box, Button, Image, Text, Margin, Flex } from "../../../components";

const BoardItem = ({ item, navigate, onDeletePost, onEditPost }) => {
	return (
		<>
			<Box variant="board-box" key={item?.boardId}>
				<Margin margin="1.5vw 0.3vw 1.5vw 0.3vw">
					<Box variant="guide">
						<Flex ai="center" jc="space-between">
							<Image
								variant="myboard-post"
								src={item?.imageList[0]?.imageUrl}
								alt={item?.boardTitle}
							/>
							<Box>
								<Flex fd="column">
									<Box variant="board-smaillbox">
										<Margin margin="0.9vw 0 0 2.2vw">
											<Text
												variant="board-title"
												onClick={() => {
													navigate(`/detail/post/${item?.boardId}`);
												}}
											>
												{item?.boardTitle}
											</Text>
											<Margin margin="1.1vw 0 0 0.4vw">
												<Text variant="board-content">
													{item?.boardContent}
												</Text>
											</Margin>
										</Margin>
									</Box>
									<Margin margin="0.9vw 0 0.4vw 2.2vw">
										<Box variant="board-inbox">
											<Flex jc="space-between">
												<Text variant="comment-date">
													{item?.boardCreatedAt}
												</Text>

												<Box variant="board-minibutton">
													<Flex gap="0.9vw">
														<Button variant="mypage" onClick={onEditPost(item)}>
															수정
														</Button>
														<Button
															variant="mypage"
															onClick={onDeletePost(item)}
														>
															삭제
														</Button>
													</Flex>
												</Box>
											</Flex>
										</Box>
									</Margin>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Margin>
			</Box>
		</>
	);
};

export default BoardItem;

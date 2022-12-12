import { Box, Image, Text, Margin, Flex } from "../../../components";

const LikeItem = ({ like, data, navigate, isFetchingNextPage }) => {
	return (
		<Box>
			<Box variant="board-box" key={like.boardId}>
				<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
					<Box variant="guide">
						<Flex>
							<Image
								variant="myboard-post"
								src={like?.imageList[0]?.imageUrl}
								alt={like?.boardTitle}
							/>
							<Box>
								<Flex fd="column">
									<Box variant="board-smaillbox">
										<Margin margin="0.9vw 0 0 2.2vw">
											<Text
												variant="board-title"
												onClick={() => {
													navigate(`/detail/post/${like.boardId}`);
												}}
											>
												{like?.boardTitle}
											</Text>
											<Margin margin="1.1vw 0 0 0.4vw">
												<Text variant="board-content">{like.boardContent}</Text>
											</Margin>
										</Margin>
									</Box>
									<Margin margin="0.9vw 0 0 2.2vw">
										<Box variant="board-inbox">
											<Flex gap="1.8vw" jc="space-between">
												<Box>
													<Text variant="comment-date">
														{like.boardCreatedAt}
													</Text>
												</Box>
												<Box>
													<Flex gap="1.8vw">
														<Text>💬 {like.commentCount}</Text>
														<Text>⭐️ {like.totalRating}</Text>
														<Text>❤️ {like.heartCount}</Text>
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
		</Box>
	);
};

export default LikeItem;

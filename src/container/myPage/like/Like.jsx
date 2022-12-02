import {
	Box,
	Image,
	Text,
	Margin,
	Flex,
} from "../../../components";

const Like = ({
    data,
    navigate,
}) => {
  return (
<Box>
			<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
				<Box variant="mypage-nav">
					<Text variant="title">좋아요 한 글 ❣️ </Text>
				</Box>
			</Margin>
			{data && data?.length > 0 ? (
				<Box>
					{data?.map(item => {
						return (
							<Box variant="board-box" key={item.boardId}>
								<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
									<Box variant="guide">
										<Flex>
											<Image
												variant="myboard-post"
												src={item.imageList[0].imageUrl}
												alt={item.boardTitle}
											/>
											<Box>
												<Flex fd="column">
													<Box variant="board-smaillbox">
														<Margin margin="0.9vw 0 0 2.2vw">
															<Text
																variant="board-title"
																onClick={() => {
																	navigate(`/detail/post/${item.boardId}`);
																}}
															>
																{item.boardTitle}
															</Text>
															<Margin margin="1.8vw 0 0 0.4vw">
																<Text variant="board-content">
																	{item.boardContent}
																</Text>
															</Margin>
														</Margin>
													</Box>
													<Margin margin="0.9vw 0 0 2.2vw">
														<Box variant="board-inbox">
															<Flex gap="1.8vw" jc="space-between">
																<Box>
																	<Text variant="comment-date">
																		{item.boardCreatedAt}
																	</Text>
																</Box>
																<Box>
																	<Flex gap="1.8vw">
																		<Text>💬 {item.commentCount}</Text>
																		<Text>⭐️ {item.totalRating}</Text>
																		<Text>❤️ {item.heartCount}</Text>
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
						);
					})}
				</Box>
			) : (
				<Box>
					<Text variant="comment"> 좋아요한 게시물이 없습니다.</Text>
				</Box>
			)}
		</Box>
  )
}

export default Like

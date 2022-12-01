import { Box, Image, Text, Margin, Flex } from "../../../components";

const All = ({
	recentlyMyBoardList,
	recentlyMyCommentList,
	recentlyMyHeartBoardList,
	spinner,
	navigate,
}) => {
	return (
		<Box variant="mypage-category">
			<Box>
				<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
					<Box variant="guide">
						<Text variant="title">내가 쓴 글 ✍🏻</Text>
						<Text
							variant="add"
							onClick={() => {
								navigate(`/mypage/myboard`);
							}}
						>
							더보기
						</Text>
					</Box>
				</Margin>
				<Flex gap="1.5em">
					{recentlyMyBoardList?.map(item => {
						return (
							<Box key={item.boardId}>
								<Image
									variant="mypage-post"
									src={item.imageList[0].imageUrl}
									alt={item.boardTitle}
								></Image>
								<Margin margin="0.7vw auto 0 auto">
									<Text
										variant="all-title"
										onClick={() => {
											navigate(`/detail/post/${item.boardId}`);
										}}
									>
										{item.boardTitle}
									</Text>
								</Margin>
							</Box>
						);
					})}
				</Flex>
			</Box>
			<Box>
				<Margin margin="60px 0 10px 0">
					<Box variant="guide">
						<Text variant="title">좋아요 한 글 ❣️ </Text>
						<Text
							variant="add"
							onClick={() => {
								navigate(`/mypage/mylike`);
							}}
						>
							더보기
						</Text>
					</Box>
				</Margin>
				<Flex gap="1.5em">
					{recentlyMyHeartBoardList?.map(item => {
						return (
							<Box key={item.boardId}>
								<Box key={item.boardId}>
									<Image
										variant="mypage-post"
										src={item.imageList[0].imageUrl}
										alt={item.boardTitle}
									></Image>
									<Margin margin="8px auto 0 auto">
										<Text
											variant="all-title"
											onClick={() => {
												navigate(`/detail/post/${item.boardId}`);
											}}
										>
											{item.boardTitle}
										</Text>
									</Margin>
								</Box>
							</Box>
						);
					})}
				</Flex>
			</Box>
			<Box>
				<Margin margin="60px 0 10px 0">
					<Box variant="guide">
						<Text variant="title">작성 댓글 📋</Text>
						<Text
							variant="add"
							onClick={() => {
								navigate(`/mypage/mycomment`);
							}}
						>
							더보기
						</Text>
					</Box>
				</Margin>

				{recentlyMyCommentList?.map(item => {
					return (
						<Box key={item.commentId}>
							<Margin margin="0 0 0.9vw 0">
								<Box variant="comment-box" key={item.commentId}>
									<Margin margin="1.2vw 1.9vw 0 1.9vw">
										<Box>
											<Flex jc="space-between" ai="center">
												<Text variant="comment">{item.commentContent}</Text>
												<Text variant="comment-date">
													{item.commentCreatedAt}
												</Text>
											</Flex>
										</Box>
									</Margin>
									<Margin margin="0.9vw 0 0 1.9vw">
										<Text
											variant="comment-title"
											onClick={() => {
												navigate(`/detail/post/${item.boardId}`);
											}}
										>
											{item.boardTitle}
										</Text>
									</Margin>
								</Box>
							</Margin>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default All;

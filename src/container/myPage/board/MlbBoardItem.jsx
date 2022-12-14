import { Box, Image, Text, Margin, Flex,} from "../../../components";

const MlbBoardItem = ({ item, navigate, onDeletePost, onEditPost }) => {
	return (
		<>
			<Margin margin="12px auto">
				<Box
					size="container-s"
					style={{ borderBottom: "1px solid #D9D9D9" }}
					key={item.communityId}
				>
					<Flex jc="space-between">
						<Box
							size="container-m"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<Text
								size="m"
								style={{ fontWeight: "700" }}
								onClick={() => {
									navigate(`/detail/post/${item?.boardId}`);
								}}
							>
								{item?.boardTitle}
							</Text>
							<Margin margin="6px 0 13px 0">
								<Text
									size="s-board"
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item?.boardContent}
								</Text>
							</Margin>
							<Margin margin="6px 0 0 0">
								<Flex gap="2px" jc="space-between">
									<Text size="s">{item.boardCreatedAt}</Text>
									<Box variant="board-minibutton">
										<Flex gap="0.9vw">
											<Text size="s" onClick={onEditPost(item)}>
												수정
											</Text>
											<Text size="s" onClick={onDeletePost(item)}>
												삭제
											</Text>
										</Flex>
									</Box>
								</Flex>
							</Margin>
						</Box>
						<Box>
							<Flex style={{ position: "relative" }}>
								<Image
									size="s"
									src={item?.imageList[0]?.imageUrl}
									alt={item?.boardTitle}
								/>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Margin>

			{/* <Box variant="board-box" key={item?.boardId}>
				<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
					<Flex jc="space-between">
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
											<Text variant="board-content">{item?.boardContent}</Text>
										</Margin>
									</Margin>
								</Box>
								<Margin margin="0.9vw 0 0.4vw 2.2vw">
									<Box variant="board-inbox">
										<Flex jc="space-between">
											<Text variant="comment-date">{item?.boardCreatedAt}</Text>

											<Box variant="board-minibutton">
												<Flex gap="0.9vw">
													<Button variant="mypage" onClick={onEditPost(item)}>
														수정
														<Image variant="profile-edit" src={Edit} />
													</Button>
													<Button variant="mypage" onClick={onDeletePost(item)}>
														삭제
														<Image variant="profile-edit" src={Delete} />
													</Button>
												</Flex>
											</Box>
										</Flex>
									</Box>
								</Margin>
							</Flex>
						</Box>
					</Flex>
				</Margin>
			</Box> */}
		</>
	);
};

export default MlbBoardItem;

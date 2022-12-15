import { Box, Image, Text, Margin, Flex } from "../../../components";

const MblComuBoardItem = ({
	item,
	navigate,
	onDeleteComuPost,
	onEditComuPost,
}) => {
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
                                    navigate(`/community/${item.communityId}`);
                                }}
							>
								{item.communityTitle}
							</Text>
							<Margin margin="6px 0 13px 0">
								<Text
									size="s-board"
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item.communityContent}
								</Text>
							</Margin>
							<Margin margin="6px 0 0 0">
								<Flex gap="2px" jc="space-between">
									<Text size="s">{item.communityCreatedAt}</Text>
									<Box variant="board-minibutton">
										<Flex gap="0.9vw">
											<Text size="s" onClick={onEditComuPost(item)}>
												수정
											</Text>
											<Text size="s" onClick={onDeleteComuPost(item)}>
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
									src={item.communityImage}
									alt={item.communityTitle}
								/>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Margin>			
		</>
	);
};

export default MblComuBoardItem;

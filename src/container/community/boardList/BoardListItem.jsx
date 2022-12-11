import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import hit from "../../../assets/icons/hit.png";

const BoardListItem = ({ item, navigate }) => {
	return (
		<Margin margin="12px auto">
			<Box variant="comu-container" key={item.communityId}>
				<Flex>
					<Box>
						<Flex style={{ position: "relative" }}>
							<Image
								variant="comu-item"
								src={item.communityImage}
								alt={item.communityTitle}
							/>
							<Flex
								gap="2px"
								style={{
									position: "absolute",
									top: "6px",
									right: "10px",
								}}
								jc="flex-end"
							>
								<Image variant="comu-hit" src={hit} alt={"조회수"} />
								<Text variant="hit">{item.communityHitCount}</Text>
							</Flex>
						</Flex>
					</Box>
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
									<Text size="s">
										<span>by </span>
										{item.memberNickname}
									</Text>
									<Text size="s">{item.createdAt}</Text>
								</Flex>
							</Margin>
						</Box>
					</Flex>
				</Flex>
			</Box>
		</Margin>
	);
};

export default BoardListItem;

import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import hit from "../../../assets/icons/hit.png";

const MblBoardListItem = ({item,navigate}) => {
	return (
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
								style={{ height: "43px" }}
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
					<Box>
						<Flex style={{ position: "relative" }}>
							<Image
								size="s"
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
								<Image src={hit} alt={"조회수"} />
								<Text size="s" style={{ color: "white" }}>
									{item.communityHitCount}
								</Text>
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Margin>
	);
};

export default MblBoardListItem;

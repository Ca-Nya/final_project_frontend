import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import hit from "../../../assets/icons/hit.png";

const BoardListItem = ({ item, navigate }) => {
	return (
		<Margin margin="12px auto">
			<Box variant="comu-container" key={item.communityId}>
				<Flex>
					<Box variant="relative">
						<Image
							variant="comu-item"
							src={item.communityImage}
							alt={item.communityTitle}
							onClick={() => {
								navigate(`/community/${item.communityId}`);
							}}
						/>
						<Box variant="hit-position">
							<Image variant="comu-hit" src={hit} alt={"조회수"} />
							<Text variant="hit">{item.communityHitCount}</Text>
						</Box>
					</Box>
					<Margin margin="0 0 0 2.1vw">
						<Box variant="comu-container-text">
							<Text
								variant="comu-title"
								onClick={() => {
									navigate(`/community/${item.communityId}`);
								}}
							>
								{item.communityTitle}
							</Text>
							<Margin margin="6px 0 13px 0">
								<Text
									variant="comu-content"
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item.communityContent}
								</Text>
							</Margin>
							<Margin margin="6px 0 0 0">
								<Flex gap="2px" jc="space-between">
									<Text variant="comu-nickname">
										<span>by </span>
										{item.memberNickname}
									</Text>
									<Text variant="comu-nickname">{item.createdAt}</Text>
								</Flex>
							</Margin>
						</Box>
					</Margin>
				</Flex>
			</Box>
		</Margin>
	);
};

export default BoardListItem;

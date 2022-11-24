import {
	ThirdHeading,
	Image,
	DataList,
	DataTerm,
	DataDesc,
	Strong,
	Box,
	Flex,
	Text,
	Margin,
} from "../../common";

const MainCanyaPick = ({ picks }) => {
	if (!picks) return <Box>게시글이 존재하지 않습니다.</Box>;

	return (
		<Box>
			<Flex gap="24px">
				{picks.map((pick, idx) => {
					return (
						<Box key={pick.boardId} variant="main-canya-pick-item-wrap">
							<Box variant="main-canya-pick-rank">
								<Flex jc="center" ai="center">
									<Strong variant="main-canya-pick-rank">{idx + 1}</Strong>
								</Flex>
							</Box>
							<Image
								src={pick.imageUrl}
								alt="Ca Nya's Pick3 카페 이미지"
								variant="main-canya-pick"
							/>
							<Box variant="main-cany-pick-content-wrap">
								<Margin margin="0 0 12px 0">
									<ThirdHeading variant="main-canya-pick-title">
										{pick.boardTitle}
									</ThirdHeading>
								</Margin>
								<Box variant="main-canya-pick-content">
									<Text variant="main-canya-pick-content">
										{pick.boardContent}
									</Text>
								</Box>
								<Strong>{pick.address}</Strong>
								<Box variant="main-cany-pick-content">
									<Image
										src={pick.memberProfileImage}
										alt="프로필 이미지"
										variant="main-canya-pick-profile"
									/>
									<DataList>
										<DataTerm>닉네임</DataTerm>
										<DataDesc>{pick.memberNickname}</DataDesc>
									</DataList>
								</Box>
								<DataList>
									<DataTerm>평균 평점</DataTerm>
									<DataDesc>{pick.totalRating}</DataDesc>
								</DataList>
								<DataList>
									<Box>
										<DataTerm>좋아요 수</DataTerm>
										<DataDesc>{pick.heartCount}</DataDesc>
									</Box>
									<Box>
										<DataTerm>댓글 수</DataTerm>
										<DataDesc>{pick.commentCount}</DataDesc>
									</Box>
								</DataList>
							</Box>
						</Box>
					);
				})}
			</Flex>
		</Box>
	);
};

export default MainCanyaPick;

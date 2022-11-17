import {
	ThirdHeading,
	Image,
	DataList,
	DataTerm,
	DataDesc,
	Strong,
	Box,
} from "../../common";

const MainCanyaPick = ({ coffeePick }) => {
	return (
		<Box>
			{coffeePick.map((pick, idx) => {
				return (
					<Box key={pick.boardId}>
						<Strong>{idx + 1}</Strong>
						<ThirdHeading>{pick.boardTitle}</ThirdHeading>
						<Box>{pick.boardContent}</Box>
						<Strong>주소</Strong>
						<Image
							src={pick.imageUrl}
							alt="Ca Nya's Pick3 카페 이미지"
							variant="main-canya-pick"
						/>
						<Box>
							<Image src="" alt="프로필 이미지" />
							<DataList>
								<DataTerm>닉네임</DataTerm>
								<DataDesc></DataDesc>
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
				);
			})}
		</Box>
	);
};

export default MainCanyaPick;

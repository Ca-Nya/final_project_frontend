import {
	FirstHeading,
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
	Hidden,
} from "../../components";
import { MainCanyaButtons } from "../../container/main";
import { useNavigate } from "react-router-dom";

const MainCanyaPick = ({ picks, setCanyaPick, mainPosts }) => {
	// React Router
	const navigate = useNavigate();
	if (!picks) return <Box>게시글이 존재하지 않습니다.</Box>;

	return (
		<Box>
			<Flex>
				<Margin margin="120px 57px 0 0">
					<FirstHeading variant="title">CA NYA's PICK3</FirstHeading>
				</Margin>
				<Margin margin="130px 0 30px 0">
					<MainCanyaButtons setCanyaPick={setCanyaPick} mainPosts={mainPosts} />
				</Margin>
			</Flex>
			<Flex gap="24px">
				{picks.map((pick, idx) => {
					return (
						<Box
							onClick={() => navigate(`/detail/post/${pick.boardId}`)}
							key={pick.boardId}
							variant="main-canya-pick-item-wrap"
						>
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
									<ThirdHeading
										variant="main-canya-pick-title"
										className="ellipsis-sm"
									>
										{pick.boardTitle}
									</ThirdHeading>
								</Margin>
								<Margin margin="0 0 10px 0">
									<Box variant="main-canya-pick-content">
										<Text
											variant="main-canya-pick-content"
											className="ellipsis"
										>
											{pick.boardContent}
										</Text>
									</Box>
								</Margin>
								<Margin margin="0 0 15px 0">
									<Box variant="main-canya-pick-info">
										<Strong
											variant="main-canya-pick-address"
											className="ellipsis-sm"
										>
											{pick.address}
										</Strong>
										<Margin margin="14px 0 0 0">
											<DataList variant="main-canya-pick-hashtag">
												<Box>
													<Hidden>
														<DataTerm>높은 점수를 받은 카테고리</DataTerm>
													</Hidden>
													<Flex gap="6px">
														<DataDesc>#커피맛집</DataDesc>
														<DataDesc>#디저트맛집</DataDesc>
													</Flex>
												</Box>
											</DataList>
										</Margin>
									</Box>
								</Margin>
								<Flex>
									<Flex>
										<Image
											src={pick.memberProfileImage}
											alt="프로필 이미지"
											variant="small-profile"
										/>
										<Margin margin="2px 0 0 10px">
											<Box variant="main-canya-pick-info-content">
												<DataList>
													<Hidden>
														<DataTerm>닉네임</DataTerm>
													</Hidden>
													<DataDesc variant="main-canya-pick-content-nickname">
														{pick.memberNickname}
													</DataDesc>
												</DataList>
												<DataList>
													<Hidden>
														<DataTerm>평균 평점</DataTerm>
													</Hidden>
													<DataDesc variant="main-canya-pick-content-rate">
														{pick.totalRating}
													</DataDesc>
												</DataList>
											</Box>
										</Margin>
									</Flex>
									<DataList>
										<Flex>
											<Box variant="main-canya-pick-heart-comment-info-wrap">
												<Flex gap="15px">
													<Hidden>
														<DataTerm>좋아요 수</DataTerm>
													</Hidden>
													<DataDesc variant="main-canya-pick-content-heart">
														{pick.heartCount}
													</DataDesc>
													<Hidden>
														<DataTerm>댓글 수</DataTerm>
													</Hidden>
													<DataDesc variant="main-canya-pick-content-comment">
														{pick.commentCount}
													</DataDesc>
												</Flex>
											</Box>
										</Flex>
									</DataList>
								</Flex>
							</Box>
						</Box>
					);
				})}
			</Flex>
		</Box>
	);
};

export default MainCanyaPick;

import {
	Box,
	FirstHeading,
	SecondHeading,
	DataList,
	DataTerm,
	DataDesc,
	Flex,
	Margin,
	Hidden,
	Button,
} from "../../components";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const MainAllList = ({ allDto }) => {
	// React Router
	const navigate = useNavigate();

	return (
		<>
			<Margin margin="0 0 180px 0">
				<Margin margin="100px 0 33px 0">
					<Flex jc="space-between" ai="center">
						<FirstHeading variant="title">ALL☕️</FirstHeading>
						<Button onClick={() => navigate("/overalls/전체")} variant="more">
							더보기
						</Button>
					</Flex>
				</Margin>
				<Box>
					<Margin margin="0 0 25px 0">
						<Flex gap="20px">
							{allDto.map((allItem, idx) => {
								return (
									<Fragment key={allItem.boardId}>
										{idx <= 3 ? (
											<Box
												onClick={() =>
													navigate(`/detail/post/${allItem.boardId}`)
												}
												variant="main-all-item-wraper"
											>
												<Box
													bg={allItem.imageUrl}
													variant="main-all-item-image"
												/>
												<Margin margin="33px 0 0 0">
													<Box variant="main-all-item-info">
														<SecondHeading
															variant="main-all-item-address"
															className="ellipsis-sm"
														>
															{allItem.address}
														</SecondHeading>
														<Margin margin="9px 0">
															<DataList variant="main-all-item-hashtag">
																<Box>
																	<Hidden>
																		<DataTerm>
																			높은 점수를 받은 카테고리
																		</DataTerm>
																	</Hidden>
																	<Flex jc="center" gap="6px">
																		{allItem.highestRatings.map((item, idx) => {
																			return (
																				<DataDesc key={idx}>#{item}</DataDesc>
																			);
																		})}
																	</Flex>
																</Box>
															</DataList>
														</Margin>
														<DataList>
															<Margin margin="20px 0 0 -20px">
																<Hidden>
																	<DataTerm>평균 평점</DataTerm>
																</Hidden>
																<DataDesc variant="main-all-item-rate">
																	{allItem.totalRating}
																</DataDesc>
															</Margin>
														</DataList>
													</Box>
												</Margin>
											</Box>
										) : (
											""
										)}
									</Fragment>
								);
							})}
						</Flex>
					</Margin>
					<Flex gap="20px">
						{allDto.map((allItem, idx) => {
							return (
								<Fragment key={allItem.boardId}>
									{idx > 3 ? (
										<Box
											onClick={() =>
												navigate(`/detail/post/${allItem.boardId}`)
											}
											variant="main-all-item-wraper"
										>
											<Box
												bg={allItem.imageUrl}
												variant="main-all-item-image"
											/>
											<Margin margin="33px 0 0 0">
												<Box variant="main-all-item-info">
													<SecondHeading
														variant="main-all-item-address"
														className="ellipsis-sm"
													>
														{allItem.address}
													</SecondHeading>
													<Margin margin="9px 0">
														<DataList variant="main-all-item-hashtag">
															<Box>
																<Hidden>
																	<DataTerm>높은 점수를 받은 카테고리</DataTerm>
																</Hidden>
																<Flex jc="center" gap="6px">
																	{allItem.highestRatings.map((item, idx) => {
																		return (
																			<DataDesc key={idx}>#{item}</DataDesc>
																		);
																	})}
																</Flex>
															</Box>
														</DataList>
													</Margin>
													<DataList>
														<Margin margin="20px 0 0 -20px">
															<Hidden>
																<DataTerm>평균 평점</DataTerm>
															</Hidden>
															<DataDesc variant="main-all-item-rate">
																{allItem.totalRating}
															</DataDesc>
														</Margin>
													</DataList>
												</Box>
											</Margin>
										</Box>
									) : (
										""
									)}
								</Fragment>
							);
						})}
					</Flex>
				</Box>
			</Margin>
		</>
	);
};

export default MainAllList;

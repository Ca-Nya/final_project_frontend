import {
	Box,
	SecondHeading,
	DataList,
	DataTerm,
	DataDesc,
	Flex,
	Margin,
	Strong,
	Hidden,
} from "../../common";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const MainAllList = ({ allDto }) => {
	// React Router
	const navigate = useNavigate();

	return (
		<Box>
			<Margin margin="0 0 25px 0">
				<Flex gap="20px">
					{allDto.map((allItem, idx) => {
						return (
							<Fragment key={allItem.boardId}>
								{idx <= 3 ? (
									<Box
										onClick={() => navigate(`/detail/post/${allItem.boardId}`)}
										variant="main-all-item-wraper"
									>
										<Box bg={allItem.imageUrl} variant="main-all-item-image" />
										<Margin margin="33px 0 0 0">
											<Box variant="main-all-item-info">
												<SecondHeading
													variant="main-all-item-address"
													className="ellipsis-sm"
												>
													{allItem.address}
												</SecondHeading>
												<Margin margin="9px 0 0 9%">
													<DataList variant="main-all-item-hashtag">
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
									onClick={() => navigate(`/detail/post/${allItem.boardId}`)}
									variant="main-all-item-wraper"
								>
									<Box bg={allItem.imageUrl} variant="main-all-item-image" />
									<Margin margin="33px 0 0 0">
										<Box variant="main-all-item-info">
											<SecondHeading
												variant="main-all-item-address"
												className="ellipsis-sm"
											>
												{allItem.address}
											</SecondHeading>
											<Margin margin="9px 0 0 9%">
												<DataList variant="main-all-item-hashtag">
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
	);
};

export default MainAllList;

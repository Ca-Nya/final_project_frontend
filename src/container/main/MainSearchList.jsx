import {
	Box,
	Margin,
	FirstHeading,
	Image,
	Flex,
	DataList,
	DataTerm,
	DataDesc,
	Hidden,
	ThirdHeading,
	Text,
	Strong,
} from "../../components";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const MainSearchList = ({ data, setResetMain }) => {
	// React Router
	const navigate = useNavigate();

	return (
		<Margin margin="170px 0 200px 0 ">
			<Box variant="container">
				<Box variant="overalls-nav">
					<Margin margin="0 57px 0 0">
						<FirstHeading variant="title">검색결과🔍</FirstHeading>
					</Margin>
				</Box>
				{data.pages[0].list ? (
					<>
						{
							<Margin margin="45px 0 0 0">
								<Flex jc="center" fw="wrap" gap="24px">
									{data?.pages.map((page, idx) => {
										return (
											<Fragment key={idx}>
												{page.list?.map((item, index) => {
													return (
														<Box
															variant="list-item"
															key={item.boardId}
															onClick={() => {
																setResetMain(true);
																navigate(`/detail/post/${item.boardId}`);
															}}
														>
															<Image
																src={item.imageUrl}
																alt="카페 이미지"
																variant="list-item"
															/>
															<Box variant="main-cany-pick-content-wrap">
																<Box variant="list-user-info-wrap">
																	<Flex ai="center">
																		<Flex ai="center" gap="7px">
																			<Image
																				src={item.memberProfileImage}
																				alt="프로필 이미지"
																				variant="small-profile"
																			/>
																			<DataList>
																				<Hidden>
																					<DataTerm>닉네임</DataTerm>
																				</Hidden>
																				<DataDesc variant="main-canya-pick-content-nickname">
																					{item.memberNickname}
																				</DataDesc>
																			</DataList>
																		</Flex>
																		<DataList>
																			<Hidden>
																				<DataTerm>평균 평점</DataTerm>
																			</Hidden>
																			<DataDesc variant="list-content-rate">
																				{item.totalRating}
																			</DataDesc>
																		</DataList>
																	</Flex>
																</Box>
																<Margin margin="12px 0">
																	<ThirdHeading
																		variant="list-title"
																		className="ellipsis-sm"
																	>
																		{item.boardTitle}
																	</ThirdHeading>
																</Margin>
																<Box variant="list-content-desc">
																	<Text
																		variant="main-canya-pick-content"
																		className="ellipsis"
																	>
																		{item.boardContent}
																	</Text>
																</Box>
																<Margin margin="15px 0 0 0">
																	<Text variant="list-item-date">
																		{item.date}
																	</Text>
																</Margin>
															</Box>
														</Box>
													);
												})}
											</Fragment>
										);
									})}
								</Flex>
							</Margin>
						}
					</>
				) : (
					<Box variant="spinner-wrap">
						<Flex jc="center" ai="center">
							<Strong variant="warning">
								검색 결과가 존재하지 않습니다.👀
							</Strong>
						</Flex>
					</Box>
				)}
			</Box>
		</Margin>
	);
};

export default MainSearchList;

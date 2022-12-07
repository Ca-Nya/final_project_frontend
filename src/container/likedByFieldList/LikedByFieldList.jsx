import {
	Box,
	FirstHeading,
	ThirdHeading,
	Margin,
	Flex,
	Image,
	Hidden,
	DataList,
	DataTerm,
	DataDesc,
	Text,
	Nav,
	Button,
	Strong,
} from "../../components";
import {
	coffee,
	dessert,
	kindness,
	mood,
	parking,
	price,
} from "../../assets/icons/fields";
import { useFetchList } from "../../querys/list";
import { useParams } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const LikedByFieldList = () => {
	// React Router
	const navigate = useNavigate();
	// 별점별 게시글
	const fields = [
		["가성비", "가성비맛집", price],
		["분위기", "분위기맛집", mood],
		["커피", "커피맛집", coffee],
		["디저트", "디저트맛집", dessert],
		["친절", "친절맛집", kindness],
		["주차", "주차맛집", parking],
	];
	// 리스트 카테고리 param
	const { category } = useParams();
	console.log("category =>", category);
	// 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage } =
		useFetchList(category);
	console.log("data =>", data, "isFetchingNextPage =>", isFetchingNextPage);
	// observe
	const { ref, inView } = useInView();
	console.log("inView =>", inView);
	// observe시 다음 게시글 요청 Effect
	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView, fetchNextPage]);

	if (status === "loading") return <Box>Loading</Box>;
	if (status === "error") return <Box>Error</Box>;

	return (
		<Margin margin="100px 0 200px 0">
			<Nav variant="main-category-button-group-wrap">
				<Flex jc="center" ai="center" gap="14px">
					{fields.map(category => {
						return (
							<Button
								key={category[0]}
								variant="main-category"
								onClick={() => {
									navigate(`/fields/${category[0]}`);
								}}
							>
								<>
									<Image
										src={category[2]}
										alt={`${category[1]} 버튼`}
										variant="main-category"
									/>
									<Margin margin="7% 0 0 0">
										<Text variant="main-category">{category[1]}</Text>
									</Margin>
								</>
							</Button>
						);
					})}
				</Flex>
			</Nav>
			<Box variant="container">
				<Margin margin="80px 0 25px 0">
					<FirstHeading variant="title">CA NYA's PICK3</FirstHeading>
				</Margin>
				{data?.pages.map((page, idx) => {
					return (
						<Box>
							<Flex gap="24px">
								<Fragment key={page?.list[idx]?.boardId}>
									{page.list?.map((pick, idx) => {
										return (
											<Fragment>
												{idx <= 2 && (
													<Box
														onClick={() =>
															navigate(`/detail/post/${pick.boardId}`)
														}
														key={pick.boardId}
														variant="main-canya-pick-item-wrap"
													>
														<Box variant="main-canya-pick-rank">
															<Flex jc="center" ai="center">
																<Strong variant="main-canya-pick-rank">
																	{idx + 1}
																</Strong>
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
																					<DataTerm>
																						높은 점수를 받은 카테고리
																					</DataTerm>
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
																		rank={localStorage.getItem("memberStatus")}
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
												)}
											</Fragment>
										);
									})}
								</Fragment>
							</Flex>
						</Box>
					);
				})}

				<Margin margin="65px 0 0 0">
					<Box variant="review-title">
						<FirstHeading variant="title">{category} 맛집💛</FirstHeading>
					</Box>
				</Margin>
				<Margin margin="45px 0 0 0">
					<Flex jc="center" fw="wrap" gap="24px">
						{data?.pages.map((page, idx) => {
							return (
								<Fragment key={page?.list[idx]?.boardId}>
									{page.list?.map((item, idx) => {
										return (
											<Fragment>
												{idx > 2 && (
													<Box
														variant="list-item"
														key={item.boardId}
														onClick={() =>
															navigate(`/detail/post/${item.boardId}`)
														}
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
																			rank={localStorage.getItem(
																				"memberStatus",
																			)}
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
												)}
											</Fragment>
										);
									})}
								</Fragment>
							);
						})}
					</Flex>
				</Margin>
				<Box>
					{isFetchingNextPage ? <Box>Loading...</Box> : <Box ref={ref} />}
				</Box>
			</Box>
		</Margin>
	);
};

export default LikedByFieldList;

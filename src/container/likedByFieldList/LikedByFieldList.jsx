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
} from "../../components";
import { useFetchList } from "../../querys/list";
import { useParams } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { useInView } from "react-intersection-observer";

const LikedByFieldList = () => {
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
		<Margin margin="160px 0 200px 0">
			<Box variant="container">
				<Box variant="review-title">
					<FirstHeading variant="title">Review☕️</FirstHeading>
				</Box>
				<Margin margin="45px 0 0 0">
					<Flex jc="center" fw="wrap" gap="20px">
						{data?.pages.map((page, idx) => {
							return (
								<Fragment key={page?.list[idx]?.boardId}>
									{page.list?.map(item => {
										return (
											<Box variant="list-item" key={item.boardId}>
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
														<Text variant="list-item-date">{item.date}</Text>
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
				<Box>
					{isFetchingNextPage ? <Box>Loading...</Box> : <Box ref={ref} />}
				</Box>
			</Box>
		</Margin>
	);
};

export default LikedByFieldList;

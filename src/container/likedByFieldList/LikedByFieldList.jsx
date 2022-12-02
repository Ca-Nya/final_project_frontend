import {
	Box,
	FirstHeading,
	ThirdHeading,
	Margin,
	Flex,
	Image,
	Strong,
	Hidden,
	DataList,
	DataTerm,
	DataDesc,
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
		<Margin margin="160px 0 0 0">
			<Box variant="container">
				<Box variant="review-title">
					<FirstHeading variant="title">Review</FirstHeading>
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
													variant="main-canya-pick"
												/>
												<Flex>
													<Flex>
														<Image
															src={item.memberProfileImage}
															alt="프로필 이미지"
															variant="small-profile"
														/>
														<Box variant="main-canya-pick-info-content">
															<DataList>
																<Hidden>
																	<DataTerm>닉네임</DataTerm>
																</Hidden>
																<DataDesc variant="main-canya-pick-content-nickname">
																	{item.memberNickname}
																</DataDesc>
															</DataList>
														</Box>
														<DataList>
															<Hidden>
																<DataTerm>평균 평점</DataTerm>
															</Hidden>
															<DataDesc variant="main-canya-pick-content-rate">
																{item.totalRating}
															</DataDesc>
														</DataList>
													</Flex>
												</Flex>
												<Box variant="main-cany-pick-content-wrap">
													<ThirdHeading
														variant="list-title"
														className="ellipsis-sm"
													>
														{item.boardTitle}
													</ThirdHeading>
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
					{isFetchingNextPage ? (
						<Box>Loading...</Box>
					) : (
						<Box ref={ref} variant="list-target" />
					)}
				</Box>
			</Box>
		</Margin>
	);
};

export default LikedByFieldList;

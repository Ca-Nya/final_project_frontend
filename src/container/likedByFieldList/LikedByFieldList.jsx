import { Box, FirstHeading, Margin, Flex } from "../../components";
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
				<Flex jc="center" fw="wrap" gap="24px">
					{data?.pages.map((page, idx) => {
						return (
							<Fragment key={page?.list[idx]?.boardId}>
								{page.list?.map(item => {
									return (
										<Box variant="list-item" key={item.boardId}>
											<FirstHeading>{item.boardTitle}</FirstHeading>
										</Box>
									);
								})}
							</Fragment>
						);
					})}
				</Flex>
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

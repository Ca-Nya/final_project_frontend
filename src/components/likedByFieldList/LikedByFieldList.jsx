import { Box, FirstHeading } from "../../common";
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
		<Box>
			{data?.pages.map(page => {
				return (
					<Fragment>
						{page.list?.map(item => {
							return (
								<Box variant="list-item">
									<FirstHeading>{item.boardTitle}</FirstHeading>
								</Box>
							);
						})}
					</Fragment>
				);
			})}
			<Box>
				{isFetchingNextPage ? (
					<Box>Loading...</Box>
				) : (
					<Box ref={ref} variant="list-target" />
				)}
			</Box>
		</Box>
	);
};

export default LikedByFieldList;

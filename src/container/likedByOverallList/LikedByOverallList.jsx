import { Box, FirstHeading, Button, Margin } from "../../components";
import { useFetchList } from "../../querys/list";
import { useParams } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const LikedByOverallList = () => {
	// React Router
	const navigate = useNavigate();
	// 리스트 카테고리 param
	const { category } = useParams();
	console.log("category =>", category);
	// 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage } =
		useFetchList(category);
	console.log(
		"useFetchList data ==>",
		data,
		"isFetchingNextPage =>",
		isFetchingNextPage,
	);
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
		<Margin margin="160px 0 0 0 ">
			<Box variant="container">
				<Box>
					<Button
						onClick={() => {
							navigate("/overalls/recent");
						}}
					>
						최신리뷰
					</Button>
					<Button
						onClick={() => {
							navigate("/overalls/hot");
						}}
					>
						인기리뷰
					</Button>
					<Button
						onClick={() => {
							navigate("/overalls/all");
						}}
					>
						전체리뷰
					</Button>
				</Box>
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
		</Margin>
	);
};

export default LikedByOverallList;

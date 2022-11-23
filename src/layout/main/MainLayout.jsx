import { Box, Margin } from "../../common";
import {
	MainNav,
	MainCarousel,
	MainNavButtons,
	MainList,
} from "../../components/main";
import { useFetchSearchList } from "../../querys/list";
import { Fragment, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MainLayout = () => {
	// 검색 값 state
	const [submitValues, setSubmitValues] = useState({
		category: "",
		keyword: "",
	});

	// 메인 페이지 초기화 state (검색 전 메인 화면)
	const [resetMain, setResetMain] = useState(true);
	// 검색 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage, error, refetch } =
		useFetchSearchList(submitValues);
	console.log(
		"useFetchSearchList data ==>",
		data,
		"status =>",
		status,
		"isFetchingNextPage =>",
		isFetchingNextPage,
		"error =>",
		error,
	);

	useEffect(() => {
		if (submitValues.category) {
			refetch();
		}
	}, [submitValues, refetch]);

	// observe
	const { ref, inView } = useInView();
	console.log("inView =>", inView);
	// observe시 다음 게시글 요청 Effect
	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView, fetchNextPage]);

	if (status === "error") return <Box>검색 리스트 Error</Box>;

	return (
		<>
			<MainNav setResetMain={setResetMain} setSubmitValues={setSubmitValues} />
			<Margin margin="78px 0 0 0">
				{status === "loading" && !resetMain && <Box>검색 리스트 Loading</Box>}
				{data && !resetMain ? (
					<>
						<Box variant="container">
							{data.pages[0].list ? (
								<>
									{
										<Box>
											{data.pages.map(pages => {
												return (
													<Fragment key={pages.list[0].boardId}>
														{pages.list.map(item => {
															return (
																<Box variant="list-item" key={item.boardId}>
																	리스트
																</Box>
															);
														})}
													</Fragment>
												);
											})}
											<Box>
												{isFetchingNextPage ? (
													<Box>Next Page Loading...</Box>
												) : (
													<Box ref={ref} variant="list-target" />
												)}
											</Box>
										</Box>
									}
								</>
							) : (
								<Box>검색 결과가 존재하지 않습니다.</Box>
							)}
						</Box>
					</>
				) : (
					<>
						<MainCarousel />
						<MainNavButtons />
						<Box variant="container">
							<MainList />
						</Box>
					</>
				)}
			</Margin>
		</>
	);
};

export default MainLayout;

import { Box } from "../../common";
import { MainList, MainNav } from "../../components/main";
import { useFetchSearchList } from "../../querys/list";
import { Fragment, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MainLayout = () => {
	// select값 state
	const [selectValues, setSelectValue] = useState({
		category: "통합검색",
		keyword: "",
	});
	// 검색 select option 변경 핸들러
	const handleChangeSelect = e => {
		setSelectValue(prev => {
			return {
				...prev,
				category: e.target.value,
			};
		});
	};
	// 검색 input value 변경 핸들러
	const handleChangeSearchInput = e => {
		setSelectValue(prev => {
			return {
				...prev,
				keyword: e.target.value,
			};
		});
	};
	// 메인 페이지 초기화 state (검색 전 메인 화면)
	const [resetMain, setResetMain] = useState(false);
	// 검색 리스트 요청 무한스크롤 Hook
	const { data, status, fetchNextPage, isFetchingNextPage, error, refetch } =
		useFetchSearchList(selectValues);
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
	// 검색 핸들러
	const handleSubmitSearchValue = () => {
		setResetMain(false);
		refetch();
	};
	// observe
	const { ref, inView } = useInView();
	console.log("inView =>", inView);
	// observe시 다음 게시글 요청 Effect
	useEffect(() => {
		if (inView) fetchNextPage();
	}, [inView, fetchNextPage]);

	if (status === "error") return <Box>검색 리스트 Error</Box>;

	return (
		<Box variant="layout">
			<MainNav
				handleChangeSelect={handleChangeSelect}
				handleChangeSearchInput={handleChangeSearchInput}
				selectValues={selectValues}
				handleSubmitSearchValue={handleSubmitSearchValue}
				setResetMain={setResetMain}
			/>
			{status === "loading" && !resetMain && <Box>검색 리스트 Loading</Box>}
			{data && !resetMain ? (
				<>
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
				</>
			) : (
				<MainList />
			)}
		</Box>
	);
};

export default MainLayout;

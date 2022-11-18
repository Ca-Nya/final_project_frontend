import { useState } from "react";
import { FirstHeading, Box } from "../../common";
import { useFetchPosts } from "../../querys/main";


import {
	MainCanyaPick,
	MainNavButtons,
	MainCanyaButtons,
	MainBestList,
	MainNewList,
	MainAllList,
} from "../../components/main";

const MainList = () => {
	
	// 전체 게시글 요청 hook
	const { data: mainPosts, isError, isLoading } = useFetchPosts();
	console.log("useFetchPosts query data =>", mainPosts);
	// 전체 게시글 데이터
	const { allDto, bestDto, newDto } = mainPosts;
	// 카냐's Pick state
	const [canyaPick, setCanyaPick] = useState(mainPosts.coffeePick);

	if (isError) return <Box>에러입니다</Box>;

	if (isLoading) return <Box>로딩중...</Box>;

	return (
		<Box>
	
			<MainNavButtons />
			<FirstHeading>CA NYA's PICK3</FirstHeading>
			<MainCanyaButtons setCanyaPick={setCanyaPick} mainPosts={mainPosts} />
			<MainCanyaPick picks={canyaPick} />
			<FirstHeading>BSET</FirstHeading>
			<MainBestList bestDto={bestDto} />
			<FirstHeading>NEW</FirstHeading>
			<MainNewList newDto={newDto} />
			<FirstHeading>ALL</FirstHeading>
			<MainAllList allDto={allDto} />
		</Box>
	);
};

export default MainList;

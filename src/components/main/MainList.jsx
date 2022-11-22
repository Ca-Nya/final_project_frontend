import { useEffect, useState } from "react";
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
	const {
		data: mainPosts,
		isError,
		isLoading,
		error,
		isSuccess,
	} = useFetchPosts();
	console.log(
		"useFetchPosts query data =>",
		mainPosts,
		"isError =>",
		isError,
		"error =>",
		error,
		"isSucsess =>",
		isSuccess,
	);
	// 카냐's Pick state
	const [canyaPick, setCanyaPick] = useState(null);

	useEffect(() => {
		setCanyaPick(mainPosts?.coffeePick);
	}, [mainPosts]);

	if (isError) return <Box>에러입니다</Box>;
	if (isLoading) return <Box>로딩중...</Box>;

	return (
		<Box>
			{mainPosts && (
				<>
					<MainNavButtons />
					<FirstHeading>CA NYA's PICK3</FirstHeading>
					<MainCanyaButtons setCanyaPick={setCanyaPick} mainPosts={mainPosts} />
					<MainCanyaPick picks={canyaPick} />
					<FirstHeading>BEST</FirstHeading>
					<MainBestList bestDto={mainPosts.bestDto} />
					<FirstHeading>NEW</FirstHeading>
					<MainNewList newDto={mainPosts.newDto} />
					<FirstHeading>ALL</FirstHeading>
					<MainAllList allDto={mainPosts.allDto} />
				</>
			)}
		</Box>
	);
};

export default MainList;

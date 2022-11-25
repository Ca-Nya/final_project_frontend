import { useEffect, useState } from "react";
import { FirstHeading, Box, Margin, Flex } from "../../common";
import { useFetchPosts } from "../../querys/main";
import {
	MainCanyaPick,
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
					<Flex>
						<Margin margin="120px 57px 0 0">
							<FirstHeading variant="title">CA NYA's PICK3</FirstHeading>
						</Margin>
						<Margin margin="130px 0 30px 0">
							<MainCanyaButtons
								setCanyaPick={setCanyaPick}
								mainPosts={mainPosts}
							/>
						</Margin>
					</Flex>
					<MainCanyaPick picks={canyaPick} />
					<Margin margin="130px 0 30px 0">
						<FirstHeading variant="title">BEST💛</FirstHeading>
					</Margin>
					<MainBestList bestDto={mainPosts.bestDto} />
					<Margin margin="130px 0 0 0">
						<FirstHeading variant="title">NEW🔥</FirstHeading>
					</Margin>
					<MainNewList newDto={mainPosts.newDto} />
					<Margin margin="130px 0 33px 0">
						<FirstHeading variant="title">ALL☕️</FirstHeading>
					</Margin>
					<Margin margin="0 0 200px 0">
						<MainAllList allDto={mainPosts.allDto} />
					</Margin>
				</>
			)}
		</Box>
	);
};

export default MainList;

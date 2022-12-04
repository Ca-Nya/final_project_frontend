import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirstHeading, Box, Margin, Flex, Button } from "../../components";
import { useFetchPosts } from "../../querys/main";
import {
	MainCanyaPick,
	MainCanyaButtons,
	MainBestList,
	MainNewList,
	MainAllList,
} from "../../container/main";

const MainList = () => {
	// React Router
	const navigate = useNavigate();
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
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">BEST💛</FirstHeading>
							<Button onClick={() => navigate("/overalls/hot")} variant="more">
								더보기
							</Button>
						</Flex>
					</Margin>
					<MainBestList bestDto={mainPosts.bestDto} />
					<Margin margin="130px 0 0 0">
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">NEW🔥</FirstHeading>
							<Button
								onClick={() => navigate("/overalls/recent")}
								variant="more"
							>
								더보기
							</Button>
						</Flex>
					</Margin>
					<MainNewList newDto={mainPosts.newDto} />
					<Margin margin="130px 0 33px 0">
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">ALL☕️</FirstHeading>
							<Button onClick={() => navigate("/overalls/all")} variant="more">
								더보기
							</Button>
						</Flex>
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

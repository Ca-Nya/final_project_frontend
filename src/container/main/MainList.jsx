import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirstHeading, Box, Margin, Flex, Button } from "../../components";
import { useFetchPosts } from "../../querys/main";
import {
	MainCanyaPick,
	MainBestList,
	MainNewList,
	MainAllList,
} from "../../container/main";

const MainList = () => {
	// React Router
	const navigate = useNavigate();
	// 전체 게시글 요청 hook
	const { data: mainPosts, isError, isLoading, error } = useFetchPosts();
	console.log("useFetchPosts query data =>", mainPosts, "error =>", error);
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
					<MainCanyaPick
						picks={canyaPick}
						setCanyaPick={setCanyaPick}
						mainPosts={mainPosts}
					/>
					<Margin margin="110px 0 30px 0">
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">BEST💛</FirstHeading>
							<Button onClick={() => navigate("/overalls/hot")} variant="more">
								더보기
							</Button>
						</Flex>
					</Margin>
					<MainBestList bestDto={mainPosts.bestDto} />
					<Margin margin="110px 0 0 0">
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
					<Margin margin="110px 0 33px 0">
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

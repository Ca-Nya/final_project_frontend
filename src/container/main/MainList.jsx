import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	FirstHeading,
	Box,
	Margin,
	Flex,
	Button,
	Image,
	Strong,
} from "../../components";
import { useFetchPosts } from "../../querys/main";
import {
	MainCanyaPick,
	MainBestList,
	MainNewList,
	MainAllList,
} from "../../container/main";
import spinner from "../../assets/icons/spinner.gif";

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
	console.log("useFetchPosts query data =>", mainPosts, "error =>", error);
	// 카냐's Pick state
	const [canyaPick, setCanyaPick] = useState(null);

	useEffect(() => {
		setCanyaPick(mainPosts?.coffeePick);
	}, [mainPosts]);

	if (isLoading)
		return (
			<Box variant="spinner">
				<Flex jc="center" ai="center">
					<Image src={spinner} alt="로딩중" variant="spinner" />
				</Flex>
			</Box>
		);

	if (isError)
		return (
			<>
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">
							에러입니다.😭 빠른 시일 내에 해결하겠습니다.
						</Strong>
						<Button onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
			</>
		);

	return (
		<Box>
			{mainPosts && (
				<>
					<MainCanyaPick
						picks={canyaPick}
						setCanyaPick={setCanyaPick}
						mainPosts={mainPosts}
					/>
					<Margin margin="100px 0 30px 0">
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">BEST💛</FirstHeading>
							<Button onClick={() => navigate("/overalls/인기")} variant="more">
								더보기
							</Button>
						</Flex>
					</Margin>
					<MainBestList bestDto={mainPosts.bestDto} />
					<Margin margin="100px 0 0 0">
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">NEW🔥</FirstHeading>
							<Button onClick={() => navigate("/overalls/최신")} variant="more">
								더보기
							</Button>
						</Flex>
					</Margin>
					<MainNewList newDto={mainPosts.newDto} />
					<Margin margin="100px 0 33px 0">
						<Flex jc="space-between" ai="center">
							<FirstHeading variant="title">ALL☕️</FirstHeading>
							<Button onClick={() => navigate("/overalls/전체")} variant="more">
								더보기
							</Button>
						</Flex>
					</Margin>
					<Margin margin="0 0 180px 0">
						<MainAllList allDto={mainPosts.allDto} />
					</Margin>
				</>
			)}
		</Box>
	);
};

export default MainList;

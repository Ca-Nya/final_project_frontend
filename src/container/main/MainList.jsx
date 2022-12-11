import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchPosts } from "../../querys/main";
import {
	MainCanyaPick,
	MainBestList,
	MainNewList,
	MainAllList,
} from "../../container/main";
import {
	ErrorExceptionHandler,
	ExceptionHandler,
} from "../../container/globalException";

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

	if (isLoading) return <ExceptionHandler />;
	if (isError) return <ErrorExceptionHandler />;

	return (
		<>
			{mainPosts && (
				<>
					<MainCanyaPick
						picks={canyaPick}
						setCanyaPick={setCanyaPick}
						mainPosts={mainPosts}
					/>
					<MainBestList bestDto={mainPosts.bestDto} />
					<MainNewList newDto={mainPosts.newDto} />
					<MainAllList allDto={mainPosts.allDto} />
				</>
			)}
		</>
	);
};

export default MainList;

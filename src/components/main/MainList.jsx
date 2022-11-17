import { FirstHeading } from "../../common";
import { CommentList, CommentItem } from "../../components/comment";
import { DetailLike } from "../../components/detail";
import { useFetchPosts } from "../../querys";
import {
	MainCanyaPick,
	MainNavButtons,
	MainCanyaButtons,
} from "../../components/main";

const MainList = () => {
	const { data: mainPosts } = useFetchPosts();
	console.log("useFetchPosts query data =>", mainPosts);

	const { allDto, bestDto, newDto, coffeePick, dessertPick, moodPick } =
		mainPosts;

	return (
		<div>
			<MainNavButtons />
			{/* Canya's Pick */}
			<FirstHeading>CA NYA's PICK3</FirstHeading>
			<MainCanyaButtons />
			<MainCanyaPick coffeePick={coffeePick} />
			{/* Best List */}
			<FirstHeading>BSET</FirstHeading>
			{/* New List */}
			<FirstHeading>NEW</FirstHeading>
			{/* All List */}
			<FirstHeading>ALL</FirstHeading>
			<CommentItem />
			<CommentList />
			<DetailLike />
		</div>
	);
};

export default MainList;

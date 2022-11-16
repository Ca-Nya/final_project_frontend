import { CommentList, CommentItem } from "../comment";
import { DetailLike } from "../detail"
import { useFetchPosts } from "../../querys";

const MainList = () => {
	// const { data } = useFetchPosts();
	// console.log("useFetchPosts query data =>", data);

	return (
		<div>
			<p>메인리스트</p>
			<CommentItem />
			<CommentList />
			<DetailLike />
		</div>
	);
};

export default MainList;

import { useFetchPosts } from "../../querys";

const MainList = () => {
	const { data } = useFetchPosts();
	console.log("useFetchPosts query data =>", data);

	return (
		<div>
			<p>메인리스트</p>
		</div>
	);
};

export default MainList;

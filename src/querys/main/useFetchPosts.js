import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../shared/request";

// 메인 리스트 전체 게시글 요청 API
const fetchPosts = () => {
	return getRequest({
		method: "get",
		url: "/board/main",
	});
};

// 메인 리스트 전체 게시글 요청 hook
const useFetchPosts = () => {
	return useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			// try {
			const response = await fetchPosts();
			console.log("useFetchPosts response => ", response);
			return response.data;
		},
	});
};

export default useFetchPosts;

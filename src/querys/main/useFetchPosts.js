import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../shared/request";

// 메인 리스트 전체 게시글 요청 API
const fetchPosts = () => {
	return getRequest({
		method: "get",
		url: "/board/main",
		throwWhenError: true,
	});
};

// 메인 리스트 전체 게시글 요청 hook
const useFetchPosts = () => {
	return useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const response = await fetchPosts();
			return response.data;
		},
	});
};

export default useFetchPosts;

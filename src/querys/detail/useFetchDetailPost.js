import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../shared/request";

// 상세페이지 게시글 요청 API
const fetchDetailPost = boardId => {
	return getRequest({
		method: "get",
		url: `/board/${boardId}`,
	});
};

// 상세페이지 게시글 요청 Hook
const useFetchDetailPost = boardId => {
	console.log("boardId =>", boardId);
	return useQuery({
		queryKey: ["detailPost"],
		queryFn: async () => {
			const response = await fetchDetailPost(boardId);
			console.log("useFetchDetailPost response =>", response);
			return response.data;
		},
		suspense: true,
	});
};

export default useFetchDetailPost;

import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../shared/request";

// 상세페이지 게시글 요청 API
const fetchDetailPost = boardId => {
	return getRequest({
		method: "get",
		// url: `/board/${boardId}`,
		url: `/board/${21}`,
	});
};

// 상세페이지 게시글 요청 hook
const useFetchDetailPost = boardId => {
	console.log("boardId =>", boardId);
	return useQuery({
		queryKey: ["detailPost"],
		queryFn: async () => {
			// promise의 status가 fulfilled or reject일 때 까지 기다려야 한다.
			const response = await fetchDetailPost(boardId);
			console.log("useFetchDetailPost response =>", response);
			return response.data;
		},
		suspense: true,
		// enabled: !!id, // 코드 자동 실행 설정
	});
};

export default useFetchDetailPost;

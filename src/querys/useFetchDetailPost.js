import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../shared/request";

// 상세페이지 게시글 요청 API
const fetchDetailPost = boardId => {
	// 아직 pending중인 promise를 return
	return getRequest({
		method: "get",
		// url: `/board/${boardId}`,
		url: `/board/${5}`,
	});
};

// 상세페이지 게시글 요청 hook
// id 인자로 받아서 query key에 넣어주기..?
const useFetchDetailPost = () => {
	return useQuery({
		queryKey: ["detailPost"],
		queryFn: async () => {
			// promise의 status가 fulfilled or reject일 때 까지 기다려야 한다.
			const response = await fetchDetailPost();
			console.log("useFetchDetailPost response =>", response);
			return response.data;
		},
		suspense: true,
		// enabled: !!id, // 코드 자동 실행 설정
	});
};

export default useFetchDetailPost;

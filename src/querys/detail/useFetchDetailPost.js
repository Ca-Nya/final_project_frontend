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
	// 캐싱을 해야할지에 대해 고민해보자 -> 계속 다른 값이 들어올 확률이 높기 떄문에!
	// 그렇다면 쿼리키에 boardId가 들어갈 필요가 있을가..? => 업다!
	// 하지만 이럴경우 그 전 데이터들이 보일 수 잇따!
	// 이런 것을 방지하려면 boardId를 넣어서 각각 다른 쿼리로 만들어주는 것이 좋으다
	// 이렇게 하면 suspense 도 각자 돌구 다른 쿼리이기 때문에 캐싱된 값이 보이지도 않는다!
	// queryKey도 어떤 상황인지에 따라 다르게 써야하는군아..
	// 잠깐 보여도 상관없으면 넣지안기이이

	return useQuery({
		queryKey: ["detailPost"],
		queryFn: async () => {
			const response = await fetchDetailPost(boardId);

			return response.data;
		},
		suspense: true,
	});
};

export default useFetchDetailPost;

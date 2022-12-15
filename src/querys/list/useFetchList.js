import { getRequest } from "../../shared/request";
import { useInfiniteQuery } from "@tanstack/react-query";

// 리스트 요청 API
const fetchList = ({ category, params }) => {
	return getRequest({
		method: "get",
		url: `/board/main/${category}`,
		params,
	});
};

// 리스트 요청 Hook
const useFetchList = (category, size) => {
	return useInfiniteQuery(
		["getList", category],
		async ({ pageParam = 1 }) => {
			const {
				data: { boardResponseDto: list, lastPage: isLast },
			} = await fetchList({
				category,
				params: { page: pageParam, size },
			});

			return { list, isLast, nextPage: pageParam + 1 };
		},
		{
			getNextPageParam: lastPage => {
				return !lastPage.isLast ? lastPage.nextPage : undefined;
			},
		},
	);
};

export default useFetchList;

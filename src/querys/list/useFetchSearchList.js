import { getRequest } from "../../shared/request";
import { useInfiniteQuery } from "@tanstack/react-query";

// 검색 리스트 요청 API
const fetchSearchList = ({ category, keyword, params }) => {
	return getRequest({
		method: "get",
		url: `/board/search/${category}/${keyword}`,
		params,
	});
};

// 검색 리스트 요청 Hook
const useFetchSearchList = ({ category, keyword }) => {
	return useInfiniteQuery(
		["getSearchList", category, keyword],
		async ({ pageParam = 1 }) => {
			const {
				data: { boardResponseDto: list, lastPage: isLast },
			} = await fetchSearchList({
				category,
				keyword,
				params: { page: pageParam, size: 100 },
			});

			console.log("list =======>", list);

			return { list, isLast, nextPage: pageParam + 1 };
		},
		{
			enabled: false,
			getNextPageParam: lastPage => {
				console.log(
					"isLast =>",
					lastPage.isLast,
					"nextPage =>",
					lastPage.nextPage,
				);
				return !lastPage.isLast ? lastPage.nextPage : undefined;
			},
		},
	);
};

export default useFetchSearchList;

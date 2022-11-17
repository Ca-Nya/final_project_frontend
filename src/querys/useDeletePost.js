import { request } from "../shared/request";
import { useMutation } from "@tanstack/react-query";

const deletePost = boardId => {
	return request({
		method: "delete",
		url: `/auth/board/delete/${boardId}`,
	});
};

const useDeletePost = payload => {
	return useMutation({
		mutationFn: async payload => {
			const response = await deletePost(payload);
			console.log("useDeletePost response =>", response);
			return response.data;
		},
		enabled: false,
		suspense: true,
	});
};

export default useDeletePost;

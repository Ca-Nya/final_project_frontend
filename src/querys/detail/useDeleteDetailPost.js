import { request } from "../../shared/request";
import { useMutation } from "@tanstack/react-query";

const deleteDetailPost = boardId => {
	return request({
		method: "delete",
		url: `/auth/board/delete/${boardId}`,
	});
};

const useDeleteDetailPost = payload => {
	return useMutation({
		mutationFn: async payload => {
			const response = await deleteDetailPost(payload);
			console.log("useDeletePost response =>", response);
			return response.data;
		},
		suspense: true,
	});
};

export default useDeleteDetailPost;

import { request } from "../shared/request";
import { useMutation } from "@tanstack/react-query";

const editPost = payload => {
	return request({
		method: "put",
		// url: `/auth/board/update/${boardId}`
		url: `/auth/board/update/${11}`,
		payload,
	});
};

const useEditPost = payload => {
	return useMutation({
		mutationFn: async payload => {
			const response = await editPost(payload);
			console.log("useEditPost response =>", response);
			return response.data;
		},
		enabled: false,
		suspense: true,
	});
};

export default useEditPost;

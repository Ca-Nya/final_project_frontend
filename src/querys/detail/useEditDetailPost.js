import { request } from "../../shared/request";
import { useMutation } from "@tanstack/react-query";

const editDetailPost = ({ boardId, payload }) => {
	return request({
		method: "put",
		url: `/auth/board/update/${boardId}`,
		payload,
	});
};

const useEditDetailPost = payload => {
	console.log("payload =====>", payload);
	return useMutation({
		mutationFn: async payload => {
			const response = await editDetailPost(payload);
			console.log("useEditPost response =>", response);

			return response.data;
		},
		enabled: false,
		suspense: true,
	});
};

export default useEditDetailPost;

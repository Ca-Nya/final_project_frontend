import { request } from "../../shared/request";
import { useMutation } from "@tanstack/react-query";


const deleteDetailComuPost = communityId => {
	return request({
		method: "delete",
		url: `/auth/community/delete/${communityId}`,
	});
};

const useDeleteComuPost = payload => {
    return useMutation({
		mutationFn: async payload => {
			const response = await deleteDetailComuPost(payload);
			console.log("useDeleteComuPost response =>", response);
			return response.data;
		},
		suspense: true,
	});
}

export default useDeleteComuPost

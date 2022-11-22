import { request } from "../../shared/request";
import { useMutation } from "@tanstack/react-query";

// 프로필 이미지 수정 API
const editProfileImage = profile => {
	return request({
		method: "put",
		url: `/member/auth/mypage/profile-image/update`,
		payload: profile,
	});
};

// 프로필 이미지 수정 Hook
const useEditProfileImage = profile => {
	console.log("profile =>", profile);
	return useMutation({
		mutationFn: async profile => {
			const response = await editProfileImage(profile);
			console.log("useEditProfileImage response =>", response);
			return response.data;
		},
		enabled: false,
		suspense: true,
	});
};

export default useEditProfileImage;

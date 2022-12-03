import Edit from "./edit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const ComuEdit = ({ data }) => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//queryClient 선언하기
	const queryClient = useQueryClient();

	// //댓글 삭제하기 delete요청
	// const delMutation = useMutation(data =>
	// 	axios.delete(`${BASE_URL}/auth/community/delete/${data.communityId}`, {
	// 		headers: {
	// 			authorization,
	// 		},
	// 	},
  //   {
  //     // onSuccess:()
  //   }
  //   ),
	// );
	// //댓글 삭제하기 쿼리요청
	// const handleRemove = e => {
	// 	e.preventDefault();
	// 	const delRes = window.confirm("정말 삭제하시겠습니까?");
	// 	if (delRes) {
	// 		alert("삭제되었습니다.");
	// 		delMutation.mutate({ data: data.communityId });
	// 	} else {
	// 		alert("취소합니다.");
	// 	}
	// };

	return (
		<div>
			
		</div>
	);
};

export default ComuEdit;

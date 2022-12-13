import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

//로컬스토리지 토큰가져오기
const authorization = localStorage.getItem("Authorization");
console.log(authorization)


const usefetchPostList = async pageParam => {
	const { data } = await axios.get(		
		`${BASE_URL}/member/auth/mypage/boards?page=${pageParam}&size=3`,
		{
			headers: {
				authorization,
			},
		},
	);
	const { myPageList: page, isLast } = data;
	console.log("fetchPostList====>",data);
	return { page, nextPage: pageParam + 1, isLast };
	
};


export default usefetchPostList;

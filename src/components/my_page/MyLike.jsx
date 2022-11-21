import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Input, Button, Form } from "../../common";


const BASE_URL = process.env.REACT_APP_SERVER;

const MyLike = () => {
  //로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");

 //내가좋아요한 게시물 get요청
	const { data, status } = useQuery(
		["getMyBoard"],
		async () => {
			const response = await axios.get(
				`${BASE_URL}/member/auth/mypage/heart-boards`,
				{
					headers: {
						authorization,
					},
				},
			);
			return response.data;
		},
		{
			if(isError) {
				alert("내가 좋아요한 게시물 불러오기 실패");
			},
		},
	);
	console.log("MyLike=>", data);
  return (
    <ul>
      <li><p>{nickname}님이 좋아요❤️한 게시물입니다.</p></li>
      { data && data?.length > 0? (
        <Box>
          {data?.map(item=>{
            return (
              <Box key={item.boardId}>
                         <li><img src={item.imageList[0].imageUrl} alt={item.boardTitle}/></li>
								<li>제목:{item.boardTitle}</li>						
								<li>주소:{item.address}</li>
								<li>평점:{item.totalRating.toFixed(1)}</li>
              </Box>
            )
          })}
        </Box>
      ) : (<li><p> 좋아요한 게시물이 없습니다.</p></li>) }	
    </ul>
  );
};

export default MyLike

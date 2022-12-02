import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Detail from "./detail";
import { Box, Image } from "../../components";
import Spinner from "../../assets/icons/spinner.gif";
import { useEffect } from "react";

const ComuDetail = () => {
    const { id } = useParams();
    console.log("id==>",id)
    const BASE_URL = process.env.REACT_APP_SERVER;
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//커뮤니티 상세페이지 get요청
	const { data, isError, isLoading, refetch } = useQuery({
		queryKey: ["communityDetail"],
		queryFn: async () => {
			try {
				const response = await axios.get(`${BASE_URL}/community/${id}`);
				console.log("response =====>", response.data);
				return response.data;
			} catch (error) {
				console.log("error =>", error);
				return error;
			}
		},
		suspense: true,
	});

	console.log("communityDetail=>", data);
	console.log("isError =>", isError, "isLoading =>", isLoading);

	if (isLoading)
		return (
			<Box>
				<Image src={Spinner} alt={"로딩중"} />
			</Box>
		);
	if (isError) return <Box>에러입니다.</Box>;

  return (
    <>
      <Detail
      data={data} 
      />
    </>
  )
}

export default ComuDetail

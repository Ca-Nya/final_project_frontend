import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BoardList from "./boardList";
import { Box, Image } from "../../components";
import Spinner from "../../assets/icons/spinner.gif";

const ComuList = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//커뮤니티 게시물 목록 get요청
	const { data, isError, isLoading, refetch } = useQuery({
		queryKey: ["community"],
		queryFn: async () => {
			try {
				const response = await axios.get(`${BASE_URL}/get/community`);
				console.log("response =====>", response.data);
				return response.data;
			} catch (error) {
				console.log("error =>", error);
				return error;
			}
		},
		suspense: true,
	});

	console.log("community=>", data);
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
			<BoardList
				navigate={navigate}
				data={data}
				authorization={authorization}
			/>
		</>
	);
};

export default ComuList;
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Detail from "./detail";
import { Box, Image } from "../../components";
import Spinner from "../../assets/icons/spinner.gif";
import { useEffect } from "react";
import ComuComment from "./ComuComment";
import ComuCommentList from "./ComuCommentList";


const ComuDetail = () => {
	const { id } = useParams();
	const BASE_URL = process.env.REACT_APP_SERVER;
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
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

	//queryClient 선언하기
	const queryClient = useQueryClient();

	//댓글 삭제하기 delete요청
	const delMutation = useMutation(
		data => {
			return axios.delete(`${BASE_URL}/auth/community/delete/${id}`, {
				headers: {
					authorization,
				},
			});
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries("community");
				alert("삭제되었습니다.");
				navigate("/community");
			},
		},
	);
	//댓글 삭제하기 쿼리요청
	const handleRemove = e => {
		e.preventDefault();
		const delRes = window.confirm("정말 삭제하시겠습니까?");
		if (delRes) {
			delMutation.mutate({ data: data.communityId });
		} else {
			alert("취소합니다.");
		}
	};

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
				nickname={nickname}
				authorization={authorization}
				navigate={navigate}
				onhandleRemove={handleRemove}
				id={id}
			/>
			<ComuCommentList />
			<ComuComment />
		</>
	);
};

export default ComuDetail;

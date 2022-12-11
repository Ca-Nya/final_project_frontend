import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Box, Image, Flex, Button, Strong, Margin } from "../../components";
import { Detail, MblDetail } from "./detail";
import Spinner from "../../assets/icons/spinner.gif";
import { Default, Mobile } from "../../assets/mediaQuery";
import ComuComment from "./ComuComment";
import ComuCommentList from "./ComuCommentList";
import TopButton from "../../components/topButton/TopButton";

const ComuDetail = () => {
	const { id } = useParams();
	const BASE_URL = process.env.REACT_APP_SERVER;
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	const navigate = useNavigate();
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//커뮤니티 상세페이지 get요청
	const { data, isError, isLoading } = useQuery({
		queryKey: ["communityDetail"],
		queryFn: async () => {
			try {
				const response = await axios.get(`${BASE_URL}/community/${id}`);
				return response.data;
			} catch (error) {
				return error;
			}
		},
		suspense: true,
	});

	//queryClient 선언하기
	const queryClient = useQueryClient();

	//커뮤게시글 삭제하기 delete요청
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
	//커뮤게시글 삭제하기 쿼리요청
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
			<Box variant="spinner-wrap">
				<Flex jc="center" ai="center">
					<Image src={Spinner} alt="로딩중" variant="spinner" />
				</Flex>
			</Box>
		);
	if (isError)
		return (
			<Box variant="spinner-wrap">
				<Flex fd="column" jc="center" ai="center" gap="100px">
					<Strong variant="warning">
						에러입니다.😭 빠른 시일 내에 해결하겠습니다.
					</Strong>
					<Button onClick={() => navigate(-1)} variant="cafe-review-post">
						돌아가기
					</Button>
				</Flex>
			</Box>
		);

	return (
		<>
			<Default>
				<Detail
					data={data}
					nickname={nickname}
					authorization={authorization}
					navigate={navigate}
					onhandleRemove={handleRemove}
					id={id}
				/>
				<Margin margin="30px 0 170px 0">
					<Box variant="comment-wrap">
						<ComuCommentList />
						<ComuComment />
					</Box>
				</Margin>
			</Default>
			<Mobile>
				<MblDetail
					data={data}
					nickname={nickname}
					authorization={authorization}
					navigate={navigate}
					onhandleRemove={handleRemove}
					id={id}
				/>
				<ComuCommentList />
				<ComuComment />
				<TopButton />
			</Mobile>
		</>
	);
};

export default ComuDetail;

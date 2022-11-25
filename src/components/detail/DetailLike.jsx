import { useState, useEffect } from "react";
import { Box, Button } from "../../common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_SERVER;

const DetailLike = ({ isLike, boardId, detailpostRefetch }) => {
	console.log("isLike =>", isLike);
	const navigate = useNavigate();

	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");

	//좋아요 boardId state
	const [like, setLike] = useState(null);

	//queryClient 선언하기, 예전 캐시값 지우고 새로운 쿼리패치
	const queryClient = useQueryClient();

	//좋아요 post 요청
	const {
		mutate: likeMutation,
		status,
		data,
	} = useMutation(
		async boardLike => {
			const response = await axios.post(
				`${BASE_URL}/auth/${boardLike.boardId}/heart/create`,
				boardLike,
				{
					headers: {
						authorization,
					},
				},
			);
			return response;
		},
		{
			onSuccess: ({ data }) => {
				console.log(data);
				if (data === "좋아요 생성 완료.") {
					detailpostRefetch();
					alert("좋아요❤️");
				} else {
					detailpostRefetch();
					// alert("좋아요 취소🥹");
				}
			},
			onError: error => {
				// alert("다음기회에..");
			},
		},
	);

	//좋아요 boardId state useEffect
	useEffect(() => {
		if (like !== null) {
			console.log("like =>", like);
			likeMutation({
				boardId: like,
			});
			setLike(null);
		}
	}, [like]);

	//좋아요 요청
	const handleLike = () => {
		//보드아이디 받는 로직 상세페이지 이후 구현
		if (authorization) {
			setLike(boardId);
		} else {
			alert("로그인 후 좋아요해주세요!");
			navigate("/join");
		}
	};

	return (
		<Box>
			<Box variant="detail-heart">
				<FaHeart className={isLike ? "liked" : ""} size="20" />
			</Box>
			<Button onClick={handleLike}>좋아요</Button>
		</Box>
	);
};

export default DetailLike;

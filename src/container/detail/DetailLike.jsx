import Like from "./like";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const DetailLike = ({ isLike, boardId, detailPostRefetch }) => {
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
				if (data === "좋아요 생성 완료.") {
					detailPostRefetch();
				} else {
					detailPostRefetch();
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
		}
	};

	return <Like handleLike={handleLike} isLike={isLike} />;
};

export default DetailLike;

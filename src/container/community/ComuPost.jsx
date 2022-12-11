import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Default, Mobile } from "../../assets/mediaQuery";
import { Post, MblPost } from "./post";

const ComuPost = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	const navigate = useNavigate();
	//제목, 내용 스테이트
	const init = {
		communityTitle: "",
		communityContent: "",
		// communityImage: null,
	};
	//폼데이터 전송 스테이트
	const [input, SetInput] = useState(init);
	const [communityImage, setcommunityImage] = useState("");

	// 이미지 미리보기 스테이트
	const [imageSrc, setImageSrc] = useState("");

	//텍스트데이터 스테이즈 저장
	const onChangeInput = e => {
		const { name, value } = e.target;
		SetInput({ ...input, [name]: value });
	};

	//이미지 스테이트저장, 미리보기 온체인지 핸들러
	const onChangeImage = e => {
		const { name, files } = e.target;
		setcommunityImage(files[0]);
		let reader = new FileReader();
		if (files[0]) {
			reader.readAsDataURL(files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (previewImgUrl) {
				setImageSrc(previewImgUrl);
			}
		};
	};
	//queryClient 선언하기
	const queryClient = useQueryClient();

	//게시물 등록하기 post요청
	const mutation = useMutation(
		formData =>
			axios.post(`${BASE_URL}/auth/save/community`, formData, {
				headers: {
					Authorization: authorization,
					"Content-Type": "multipart/form-data",
				},
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries("community");
				alert("게시물이 등록되었습니다.");
				navigate("/community");
			},
			onError: error => {
				alert("게시물이 등록되지않았습니다.");
			},
		},
	);

	//게시글 등록하기 쿼리요청
	const onClickHandler = e => {
		e.preventDefault();
		if (input?.communityTitle?.trim() === "") {
			return alert(" 제목을 입력해주세요.");
		} else if (input?.communityContent?.trim() === "") {
			return alert(" 내용을 입력해주세요.");
		}		
		if (authorization) {
			const formData = new FormData();
			formData.append("data", JSON.stringify(input));
			if (communityImage !== null) {
				formData.append("image", communityImage);
			}
			mutation.mutate(formData);
			let entries = formData.entries();
			for (const pair of entries) {
				// console.log(pair[0] + ", " + pair[1]);
			}
		} else {
			alert("로그인 후 게시물을 등록해주세요.");
			navigate("/join");
		}
	};

	return (
		<>
			<Default>
				<Post
					onClickHandler={onClickHandler}
					onChangeInput={onChangeInput}
					onChangeImage={onChangeImage}
					navigate={navigate}
					imageSrc={imageSrc}
				/>
			</Default>
			<Mobile>
				<MblPost
					onClickHandler={onClickHandler}
					onChangeInput={onChangeInput}
					onChangeImage={onChangeImage}
					navigate={navigate}
					imageSrc={imageSrc}
				/>
			</Mobile>
		</>
	);
};

export default ComuPost;

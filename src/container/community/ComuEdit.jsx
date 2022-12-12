import { Edit, MblEdit } from "./edit";
import { Margin, Box, Image, Flex, Button, Strong } from "../../components";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Default, Mobile } from "../../assets/mediaQuery";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import spinner from "../../assets/icons/spinner.gif";

const ComuEdit = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const { id } = useParams();
	const navigate = useNavigate();

	//이미지 수정 여부 스테이트
	const [editImgSrc, setEditImgSrc] = useState(false);
	//로컬스토리지 닉네임가져오기
	const nickname = localStorage.getItem("Nickname");
	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//queryClient 선언하기
	const queryClient = useQueryClient();

	//커뮤니티 수정 게시물 목록 get요청
	const {
		data: detailComuData,
		isError,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["community", id],
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

	//수정 내용 저장 스테이트
	const [edit, setEdit] = useState({
		communityTitle: detailComuData?.communityTitle,
		communityContent: detailComuData?.communityContent,
	});
	const [editImg, setEditImg] = useState(detailComuData?.communityImage);

	// 이미지 미리보기 스테이트
	const [imageSrc, setImageSrc] = useState("");

	//이미지 스테이트저장, 미리보기 온체인지 핸들러
	const onChangeImage = e => {
		setEditImgSrc(!editImgSrc);
		const { files } = e.target;
		setEditImg(files[0]);
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
	// 수정 내용 onChange
	const handleChangeComu = e => {
		const { name, value } = e.target;
		setEdit({ ...edit, [name]: value });
	};

	// 댓글 수정하기 put요청
	const { mutate: editMutation } = useMutation(
		async comuEdit => {
			const response = await axios.put(
				`${BASE_URL}/auth/update/community/${id}`,
				comuEdit,
				{
					headers: {
						authorization,
					},
				},
			);
			return response;
		},
		{
			onError: (error, variables, context) => {
				// console.log("error => ", error);
			},
			onSuccess: (data, variables, context) => {
				queryClient.invalidateQueries("communityDetail");
				alert("게시물이 수정되었습니다.");
				navigate(`/community/${id}`);
			},

			suspense: true,
		},
	);

	//게시물 수정하기 쿼리 요청(onClick)
	const onClickHandler = e => {
		e.preventDefault();
		const formData = new FormData();
		if (
			editImg === detailComuData?.communityImage &&
			edit.communityTitle === detailComuData?.communityTitle &&
			edit.communityContent === detailComuData?.communityContent
		) {
			alert("변경된 내용이 없습니다.");
			navigate("/community");
		} else if (editImg === detailComuData?.communityImage) {
			formData.append("data", JSON.stringify(edit));
			formData.append("url", editImg);
			editMutation(formData);
		} else {
			formData.append("data", JSON.stringify(edit));
			formData.append("image", editImg);
			editMutation(formData);
		}
		let entries = formData.entries();
		for (const pair of entries) {
			// console.log(pair[0] + ", " + pair[1]);
		}
		setEdit(false);
	};

	if (isLoading)
		return (
			<Box variant="spinner-wrap">
				<Flex jc="center" ai="center">
					<Image src={spinner} alt="로딩중" variant="spinner" />
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
				<Margin margin="160px 0 0 0">
					<Edit
						onChangeComu={handleChangeComu}
						onChangeImage={onChangeImage}
						editImgSrc={editImgSrc}
						edit={edit}
						detailComuData={detailComuData}
						onClickHandler={onClickHandler}
						imageSrc={imageSrc}
						nickname={nickname}
					/>
				</Margin>
			</Default>
			<Mobile>
				<MblEdit
					onChangeComu={handleChangeComu}
					onChangeImage={onChangeImage}
					editImgSrc={editImgSrc}
					edit={edit}
					detailComuData={detailComuData}
					onClickHandler={onClickHandler}
					imageSrc={imageSrc}
				/>
			</Mobile>
		</>
	);
};

export default ComuEdit;

import Edit from "./edit";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../../assets/icons/spinner.gif";

const ComuEdit = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const { id } = useParams();
	const navigate = useNavigate();

	//이미지 수정 여부 스테이트
	const [editImgSrc, setEditImgSrc] = useState(false);

	//로컬스토리지 토큰가져오기
	const authorization = localStorage.getItem("Authorization");
	//queryClient 선언하기
	const queryClient = useQueryClient();

	//커뮤니티 수정 게시물 목록 get요청
	const { data: detailComuData, isError, isLoading, refetch } = useQuery({
		queryKey: ["community"],
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

	const { communityTitle, communityContent, communityImage} = detailComuData;
	//수정 내용 저장 스테이트
	const [edit, setEdit] = useState({
		communityTitle: "",
		communityContent: "",
	});
	const [editImg, setEditImg] = useState("");
	// 이미지 미리보기 스테이트
	const [imageSrc, setImageSrc] = useState("");
	//이미지 스테이트저장, 미리보기 온체인지 핸들러
	const onChangeImage = e => {
		setEditImgSrc(!editImgSrc);
		const { name, files } = e.target;
		setEditImg(files[0]);
		let reader = new FileReader();
		if (files[0]) {
			reader.readAsDataURL(files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (previewImgUrl) {
				setImageSrc([...imageSrc, previewImgUrl]);
			}
		};
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
				console.log("error => ", error);
			},
			onSuccess: (data, variables, context) => {
				queryClient.invalidateQueries("communityDetail");				
				alert("게시물이 수정되었습니다.");
				navigate(`/community/${id}`);				
			},
			
			suspense: true,
		},		
	);

	//게시물 수정하기 쿼리 요청(온클릭)
	const onClickHandler = e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("data", JSON.stringify(edit));
		// formData.append("image", editImg);
		if (editImg !== null) {
			formData.append("image", editImg);
		}
		editMutation(formData);
		let entries = formData.entries();
		for (const pair of entries) {
			console.log(pair[0] + ", " + pair[1]);
		}
		// if (edit && editImg === "") {
		// 	alert("수정내용이 없습니다.");
		// }
		// else {
		editMutation(
			{
				// data: formData.append(JSON.stringify(edit),
				// ),
				communityTitle: formData.append(
					"data",
					JSON.stringify(edit.communityTitle),
				),
				communityContent: formData.append(
					"data",
					JSON.stringify(edit.communityContent),
				),
				communityImage: formData.append("image", editImg),
			},
		);
		// }
		setEdit(false);
	};

	if (isLoading)
		return (
			<div>
				<img src={Spinner} alt={"로딩중"} />
			</div>
		);

	if (isError) return <div>에러입니다.</div>;

	return (
		<>
			<input
				type="text"
				name="communityTitle"
				defaultValue={communityTitle}
				required={communityTitle}
				onChange={e=>{
					setEdit(prev=>{
						return {
                            ...prev,
                            communityTitle: e.target.value,
                        };
					})
				}}
			/>
			<input
				type="text"
				name="communityContent"
				defaultValue={communityContent}
				required={communityContent}
				onChange={e=>{
					setEdit(prev=>{
						return {
                            ...prev,
                            communityContent: e.target.value,
                        };
					})
				}}
			/>
			<input
				name="editImg"
				type={"file"}
				accept={"image/*"}
				defaultValue={communityImage}
				placeholder="이미지업로드"
				onChange={onChangeImage}
			/>
			{editImgSrc ? (
				<>
					<img src={imageSrc} alt={"수정이미지"} />
				</>
			) : (
				<img src={communityImage} alt={communityTitle} />
			)}

			<button onClick={onClickHandler}>수정완료</button>
		</>
	);
};

export default ComuEdit;

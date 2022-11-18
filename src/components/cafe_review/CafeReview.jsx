import { Box, Input, Button } from "../../common";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CafeSearch, CafeRatings } from "../../components/cafe_review";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CafeReview = () => {
	// React Router
	const navigate = useNavigate();
	// Base Url
	const BASE_URL = process.env.REACT_APP_SERVER;
	// 지도 장소 검색값 state
	const [place, setPlace] = useState("");
	// 검색값이 있을 경우에만 게시글 state에 등록
	useEffect(() => {
		if (place)
			setInputValue(prev => {
				return {
					...prev,
					address: place,
				};
			});
	}, [place]);
	// 데이터 전송을 위한 form 객체
	const formData = new FormData();
	// 게시글 작성 페이지 파라미터
	const { id } = useParams();
	// 이미지 썸네일 state
	const [thumbnailImages, setThumbnailImages] = useState([]);
	// 이미지 state
	const [images, setImages] = useState([]);
	// console.log("images =>", images);
	// 이미지 파일 추가 핸들러
	const handleGetImage = e => {
		const imageList = e.target.files;
		let imageThumbnailUrlList = [...thumbnailImages];
		let imageUrlList = [...images];
		// 이미지 상대경로 저장
		for (let i = 0; i < imageList.length; i++) {
			const currentThumbnailImageUrl = URL.createObjectURL(imageList[i]);
			const currentImageUrl = imageList[i];
			imageThumbnailUrlList.push(currentThumbnailImageUrl);
			imageUrlList.push(currentImageUrl);
		}
		if (imageThumbnailUrlList.length > 4) {
			alert("이미지는 최대 네개만 등록 가능합니다");
			imageThumbnailUrlList = imageThumbnailUrlList.slice(0, 4);
			imageUrlList = imageUrlList.slice(0, 4);
		}
		setThumbnailImages(imageThumbnailUrlList);
		setImages(imageUrlList);
	};
	// 평점 state
	const [ratings, setRatings] = useState([0, 0, 0, 0, 0, 0]);

	// 이미지 삭제 핸들러
	const handleDeleteImage = idx => () => {
		setThumbnailImages(thumbnailImages.filter((_, index) => index !== idx));
		setImages(images.filter((_, index) => index !== idx));
	};
	// 게시글 값
	const [inputValue, setInputValue] = useState({
		boardTitle: "",
		boardContent: "",
		address: place,
		ratings,
	});

	// 별점 state 변경시 게시글 state 변경
	useEffect(() => {
		setInputValue(prev => {
			return { ...prev, ratings };
		});
	}, [ratings]);

	// 게시글 작성
	const fetchAddPost = async payload => {
		try {
			console.log("post formdata =>", payload);
			const formData = payload;
			const jwtToken = localStorage.getItem("jwtToken");
			const response = await axios.put(
				`${BASE_URL}/auth/board/submit/${+id}`,
				formData,
				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "multipart/form-data",
					},
				},
			);
			console.log("response =>", response);

			return response;
		} catch (error) {
			console.log("error =>", error);
		}
	};
	// react-query => 게시글 post Mutaite 객체
	const addPost = useMutation(fetchAddPost, {
		onMutate: variables => {
			console.log("onMutate =>", variables);
		},
		onSuccess: (data, variables, context) => {
			console.log("onSuccess =>", "data =>", data);
		},
		onError: (error, variables, context) => {
			console.log("onError =>", error);
		},
	});

	return (
		<Box>
			<h1>카페 리뷰</h1>
			<Input
				type="file"
				accept="image/*"
				name="cafe_img"
				multiple
				onChange={handleGetImage}
			/>
			{thumbnailImages.map((thumbnail, idx) => {
				return (
					<div key={idx}>
						<img
							style={{ width: "300px" }}
							src={thumbnail}
							alt="카페 리뷰 사진 썸네일"
						/>
						<Button onClick={handleDeleteImage(idx)}>삭제</Button>
					</div>
				);
			})}
			<Input
				onChange={e => {
					setInputValue(prev => {
						return {
							...prev,
							boardTitle: e.target.value,
						};
					});
				}}
				placeholder="제목을 등록해주세요"
				type="text"
			/>
			<Input
				onChange={e => {
					setInputValue(prev => {
						return {
							...prev,
							boardContent: e.target.value,
						};
					});
				}}
				placeholder="리뷰를 등록해주세요"
				type="text"
			/>
			<CafeRatings ratings={ratings} setRatings={setRatings} />
			<CafeSearch setPlace={setPlace} place={place} />
			<Button
				type="button"
				onClick={() => {
					if (place) {
						formData.append("data", JSON.stringify(inputValue));
						for (let i = 0; i < images.length; i++) {
							console.log(`${images[i]}  =>`, images[i]);
							formData.append("image", images[i]);
						}
						for (let key of formData.keys()) {
							console.log("formData ===>", key, ":", formData.get(key));
						}
						addPost.mutate(formData, {
							onSuccess: (data, variables, context) => {
								alert("리뷰 작성이 완료되었습니다");
								navigate(`/detail/post/${+id}`);
							},
							onError: (error, variables, context) => {
								alert("리뷰 작성을 실패했습니다");
							},
							onSettled: (data, error, variables, context) => {},
						});
					} else if (!place) alert("장소를 선택해주세요");
				}}
			>
				등록
			</Button>
		</Box>
	);
};

export default CafeReview;

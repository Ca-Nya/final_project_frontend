import { Box, Margin } from "../../components";
import Review from "./review";
import Rating from "./rating";
import Search from "./search";
import Submit from "./submit";
import { Default, Mobile } from "../../assets/mediaQuery";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import axios from "axios";

const CafeReview = ({ id }) => {
	// React Router
	const navigate = useNavigate();
	// Base Url
	const BASE_URL = process.env.REACT_APP_SERVER;
	// 지도 장소 검색값 state
	const [place, setPlace] = useState({ address: "", addressId: "" });
	// 장소 검색값이 있을 경우에만 게시글 state에 등록
	useEffect(() => {
		if (place)
			setInputValue(prev => {
				return {
					...prev,
					address: place.address,
					addressId: place.addressId,
				};
			});
	}, [place]);
	// 데이터 전송을 위한 form 객체
	const formData = new FormData();
	// 이미지 썸네일 state
	const [thumbnailImages, setThumbnailImages] = useState([]);
	// 이미지 state
	const [images, setImages] = useState([]);

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
		address: place.address,
		addressId: place.addressId,
		ratings,
	});
	// inputValue state - boardTitle 변경 핸들러
	const handleChangeInputTitleState = e => {
		setInputValue(prev => {
			return {
				...prev,
				boardTitle: e.target.value,
			};
		});
	};
	// inputValue state - boardContent 변경 핸들러
	const handleChangeInputContentState = e => {
		setInputValue(prev => {
			return {
				...prev,
				boardContent: e.target.value,
			};
		});
	};
	// 별점 state 변경시 게시글 state 변경
	useEffect(() => {
		setInputValue(prev => {
			return { ...prev, ratings };
		});
	}, [ratings]);
	// 게시글 작성 API
	const fetchAddPost = async payload => {
		try {
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

			return response;
		} catch (error) {}
	};
	// react-query => 게시글 post Mutaite 객체
	const addPost = useMutation(fetchAddPost);
	// 리뷰 등록 핸들러
	const handlePostReview = () => {
		if (place) {
			if (!images.length) {
				alert("한 개 이상의 이미지를 등록해주세요!");
			} else {
				formData.append("data", JSON.stringify(inputValue));
				for (let i = 0; i < images.length; i++) {
					formData.append("image", images[i]);
				}
				for (let key of formData.keys()) {
					// console.log("formData ===>", key, ":", formData.get(key));
				}
				addPost.mutate(formData, {
					onSuccess: () => {
						navigate(`/detail/post/${+id}`);
					},
					onError: error => {
						alert("리뷰 작성을 실패했습니다.😭");
					},
				});
			}
		} else if (!place.address) alert("장소를 선택해주세요");
	};
	// 별점 클릭시 실행 핸들러
	// - 각 카테고리별 별점 rating state(props)에 추가
	const handleStarClick = (idx, star) => () => {
		setRatings(prev => {
			const newRate = [...prev];
			newRate.splice(idx, 1, star);
			return newRate;
		});
	};
	// 검색 값 state
	const [inputText, setInputText] = useState("");
	// 검색 값 저장 핸들러
	const handleChangePlaceValue = e => {
		setInputText(e.target.value);
	};
	// 검색 핸들러
	const handleSubmit = e => {
		e.preventDefault();
		setPlace(prev => {
			return { ...prev, address: inputText, addressId: "" };
		});
		setInputText("");
	};

	return (
		<>
			<Default>
				<Margin margin="165px 0 0 0">
					<Box variant="container">
						<Review
							onChangeInputTitleState={handleChangeInputTitleState}
							onGetImage={handleGetImage}
							onDeleteImage={handleDeleteImage}
							onChangeInputContentState={handleChangeInputContentState}
							thumbnailImages={thumbnailImages}
						/>
						<Rating ratings={ratings} onStarClick={handleStarClick} />
						<Search
							onSubmit={handleSubmit}
							onChangePlaceValue={handleChangePlaceValue}
							inputText={inputText}
							place={place}
							setPlace={setPlace}
						/>
						<Submit onPostReview={handlePostReview} />
					</Box>
				</Margin>
			</Default>
			<Mobile>
				<Box size="xl">쏘히님짱짱걸!!!우주 여신 ㅠㅠㅠ</Box>
			</Mobile>
		</>
	);
};

export default CafeReview;

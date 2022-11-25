import {
	Box,
	Input,
	Button,
	FirstHeading,
	Image,
	Label,
	Margin,
	DataList,
	DataTerm,
	DataDesc,
	Hidden,
	Flex,
	ThirdHeading,
	TextArea,
	SecondHeading,
} from "../../common";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { CafeSearch, CafeRatings } from "../../components/cafe_review";
import { cafe_review_image_upload } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CafeReview = ({ id }) => {
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
	// 리뷰 등록 핸들러
	const handlePostReview = () => {
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
				onSuccess: () => {
					alert("리뷰 작성이 완료되었습니다");
					navigate(`/detail/post/${+id}`);
				},
				onError: error => {
					console.log("error =>", error);
					alert("리뷰 작성을 실패했습니다");
				},
			});
		} else if (!place) alert("장소를 선택해주세요");
	};

	return (
		<Margin margin="165px 0 0 0">
			<Box variant="container">
				<Margin margin="0 0 60px 0">
					<FirstHeading variant="title">리뷰 작성</FirstHeading>
				</Margin>
				<Margin margin="0 0 25px 0">
					<Input
						variant="cafe-review-title"
						onChange={handleChangeInputTitleState}
						placeholder="제목을 입력해주세요."
						type="text"
					/>
				</Margin>
				<Margin margin="0 0 20px 0">
					<Flex gap="13px">
						<Label
							htmlFor="cafe-review-image"
							variant="cafe-review-file-button"
						>
							<Flex fd="column" jc="center" ai="center">
								<Image src={cafe_review_image_upload} alt="사진 업로드 버튼" />
								<ThirdHeading variant="cafe-review-file-button-title">
									사진올리기
								</ThirdHeading>
								<DataList>
									<Hidden>
										<DataTerm>올린 사진 수</DataTerm>
									</Hidden>
									<DataDesc variant="cafe-review-file-count">
										( {images.length} / 4 )
									</DataDesc>
								</DataList>
							</Flex>
						</Label>
						<Hidden>
							<Input
								id="cafe-review-image"
								type="file"
								accept="image/*"
								name="cafe_img"
								multiple
								onChange={handleGetImage}
							/>
						</Hidden>
						{thumbnailImages.map((thumbnail, idx) => {
							return (
								<Box key={idx} variant="cafe-review-thumbnail-wraper">
									<Image
										src={thumbnail}
										alt="카페 리뷰 사진 썸네일"
										variant="cafe-review-thumbnail"
									/>
									<Button
										onClick={handleDeleteImage(idx)}
										aria-label="이미지 삭제 버튼"
										variant="cafe-review-thumbnail-delete"
									/>
								</Box>
							);
						})}
					</Flex>
				</Margin>
				<TextArea
					onChange={handleChangeInputContentState}
					placeholder="리뷰를 등록해주세요."
					variant="cafe-review-desc"
				/>
				<Margin margin="60px 0 25px 0">
					<SecondHeading variant="title">별점평가⭐️</SecondHeading>
				</Margin>
				<CafeRatings ratings={ratings} setRatings={setRatings} />
				<CafeSearch setPlace={setPlace} place={place} />
				<Button type="button" onClick={handlePostReview}>
					등록
				</Button>
			</Box>
		</Margin>
	);
};

export default CafeReview;

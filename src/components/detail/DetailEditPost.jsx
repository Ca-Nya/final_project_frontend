import {
	Box,
	Input,
	Button,
	FirstHeading,
	TextArea,
	Image,
} from "../../common";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CafeSearch, CafeRatings } from "../cafe_review";
import { useFetchDetailPost, useEditDetailPost } from "../../querys";
import { useNavigate } from "react-router-dom";

const DetailEditPost = () => {
	// React Router
	const navigate = useNavigate();
	// 상세페이지 내용 요청 Hook
	const {
		data: detailPostData,
		isError: isDetailPostError,
		isDetailPostLoading,
	} = useFetchDetailPost();
	// 상세페이지 수정 Hook
	const { mutate: editPostMutate } = useEditDetailPost();

	const { address, boardContent, boardTitle, imageList, rating } =
		detailPostData;

	// 객체의 원소인 이미지를 담은 배열 생성
	const detailImages = imageList.map(({ imageUrl }) => {
		return imageUrl;
	});

	// 평점 state
	const [ratings, setRatings] = useState([0, 0, 0, 0, 0, 0]);

	// 별점을 담은 객체 배열화
	useEffect(() => {
		if (rating) {
			setRatings(prev => {
				const editRates = [];
				for (let rate in rating) {
					editRates.push(rating[rate]);
				}
				return editRates;
			});
		}
	}, [rating]);

	// 지도 장소 검색값 state
	const [place, setPlace] = useState(address);
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
	// const { id } = useParams();
	// 이미지 썸네일 state
	const [thumbnailImages, setThumbnailImages] = useState([...detailImages]);
	// 이미지 state
	const [images, setImages] = useState([...detailImages]);
	console.log("images =>", images);
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

	if (isDetailPostError) return <Box>에러입니다</Box>;

	if (isDetailPostLoading) return <Box>로딩중...</Box>;

	return (
		<Box>
			<FirstHeading>제목</FirstHeading>
			<Input
				defaultValue={boardTitle}
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
				type="file"
				accept="image/*"
				name="cafe_img"
				multiple
				onChange={handleGetImage}
			/>
			{thumbnailImages.map((thumbnail, idx) => {
				return (
					<div key={idx}>
						<Image
							variant="detail-review"
							src={thumbnail}
							alt="카페 리뷰 사진 썸네일"
						/>
						<Button onClick={handleDeleteImage(idx)}>삭제</Button>
					</div>
				);
			})}
			<FirstHeading>리뷰</FirstHeading>
			<TextArea
				defaultValue={boardContent}
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
						const imageUrls = [];
						for (let i = 0; i < images.length; i++) {
							if (typeof images[i] === "string") {
								imageUrls.push(images[i]);
							} else {
								formData.append("images", images[i]);
							}
						}
						formData.append("url", JSON.stringify({ urlList: imageUrls }));
						for (let key of formData.keys()) {
							console.log("formData ===>", key, ":", formData.get(key));
						}

						editPostMutate(formData, {
							onSuccess: (data, variables, context) => {
								alert("수정이 완료되었습니다");
								// navigate("/detail/post");
							},
							onError: (error, variables, context) => {
								alert("수정을 실패했습니다");
							},
							onSettled: (data, error, variables, context) => {},
						});
					} else if (!place) alert("장소를 선택해주세요");
				}}
			>
				수정완료
			</Button>
		</Box>
	);
};

export default DetailEditPost;

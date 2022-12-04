import { Box, Button, Flex, Margin } from "../../components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CafeSearch, CafeRatings } from "../../container/cafeReview";
import { useFetchDetailPost, useEditDetailPost } from "../../querys/detail";
import { useNavigate } from "react-router-dom";
import Review from "../../container/cafeReview/review";

const DetailEditPost = () => {
	// React Router
	const navigate = useNavigate();
	// 게시글 상세페이지 수정페이지 파라미터
	const { id } = useParams();
	console.log("DetailEditPost id ===>", id);
	// 상세페이지 내용 요청 Hook
	const {
		data: detailPostData,
		isError: isDetailPostError,
		isDetailPostLoading,
	} = useFetchDetailPost(+id);
	// 상세페이지 데이터
	const { address, boardContent, boardTitle, imageList, rating } =
		detailPostData;
	// 객체의 원소인 이미지를 담은 배열 - detailImages
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
		setInputValue(prev => {
			return { ...prev, boardTitle, boardContent };
		});
	}, [detailPostData]);
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
		// 썸네일 이미지 상대경로 저장, 이미지 저장
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
	// 게시글 값 state
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
	// 상세페이지 수정 Hook
	const { mutate: editPostMutate } = useEditDetailPost();
	// 상세페이지 수정 핸들러
	const handleEditPost = () => {
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

			editPostMutate(
				{ boardId: +id, payload: formData },
				{
					onSuccess: (data, variables, context) => {
						alert("수정이 완료되었습니다");
						navigate(`/detail/post/${+id}`);
					},
					onError: (error, variables, context) => {
						alert("수정을 실패했습니다");
					},
				},
			);
		} else if (!place) alert("장소를 선택해주세요");
	};

	if (isDetailPostError) return <Box>에러입니다</Box>;

	if (isDetailPostLoading) return <Box>로딩중...</Box>;

	return (
		<Margin margin="160px 0 0 0">
			<Box variant="container">
				<Review
					titleValue={boardTitle}
					contentValue={boardContent}
					onChangeInputTitleState={handleChangeInputTitleState}
					onGetImage={handleGetImage}
					onDeleteImage={handleDeleteImage}
					onChangeInputContentState={handleChangeInputContentState}
					thumbnailImages={thumbnailImages}
				/>
				<CafeRatings ratings={ratings} setRatings={setRatings} />
				<CafeSearch setPlace={setPlace} place={place} />
				<Margin margin="98px 0 200px 0">
					<Flex jc="center" ai="center">
						<Button
							type="button"
							onClick={handleEditPost}
							variant="cafe-review-post"
						>
							수정완료
						</Button>
					</Flex>
				</Margin>
			</Box>
		</Margin>
	);
};

export default DetailEditPost;

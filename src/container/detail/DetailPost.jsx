import {
	Margin,
	Box,
	Flex,
	DataList,
	DataDesc,
	DataTerm,
} from "../../components";
import Review from "../detail/review";
import Rating from "../detail/rating";
import { DetailMap, DetailLike } from "../../container/detail";
import { useFetchDetailPost, useDeleteDetailPost } from "../../querys/detail";
import { useNavigate, useParams } from "react-router-dom";
import {
	ErrorExceptionHandler,
	ExceptionHandler,
	WarningException,
} from "../../container/globalException";
import { CommentList, CommentItem } from "../../container/comment";
import * as Sentry from "@sentry/react";

// 캐러셀
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailPost = () => {
	// React Router
	const navigate = useNavigate();
	// 게시글 상세 페이지 파라미터
	const { id } = useParams();
	// 게시글 상세 페이지 정보 요청 hook
	const {
		data: detailPostData,
		isError,
		isLoading,
		error,
		refetch: detailPostRefetch,
	} = useFetchDetailPost(+id);

	console.log("error =>", error);

	// 별점을 담은 객체 배열화
	const ratings = [];
	for (let rate in detailPostData.rating) {
		ratings.push(detailPostData.rating[rate]);
	}
	// 게시글 삭제 요청 hook
	const { mutate: deletePostMutate } = useDeleteDetailPost();
	// 게시글 삭제 핸들러
	const handleDeletePost = () => {
		const confirmAlert = window.confirm("정말 삭제하시겠습니까?");
		if (confirmAlert) {
			deletePostMutate(+id, {
				onSuccess: data => {
					alert("리뷰를 삭제했습니다.🥰");
					navigate("/");
				},
				onError: error => {
					Sentry.captureException(error);
					alert("삭제를 실패했습니다.😞");
				},
			});
		} else {
			alert("리뷰 삭제를 취소합니다!");
		}
	};
	// 게시글 수정 핸들러
	const handleEditPost = () => {
		navigate(`/detail/edit/${+id}`);
	};

	if (isLoading) return <ExceptionHandler />;
	if (isError) return <ErrorExceptionHandler />;

	return (
		<>
			{detailPostData ? (
				<>
					<Margin margin="160px 0 0 0">
						<Box variant="container">
							<Box variant="detail-container">
								<Review
									detailPostData={detailPostData}
									handleEditPost={handleEditPost}
									handleDeletePost={handleDeletePost}
									detailPostRefetch={detailPostRefetch}
									ratings={ratings}
									id={id}
								/>
								<Rating detailPostData={detailPostData} ratings={ratings} />
								{/* searchPlace 추후에 address혹은 place로 리팩토링 */}
								<DetailMap
									searchPlace={detailPostData.address}
									addressId={detailPostData.addressId}
								/>
							</Box>
							<Margin margin="30px 0 170px 0">
								<Box variant="comment-wrap">
									<CommentList />
									<CommentItem />
								</Box>
							</Margin>
						</Box>
					</Margin>
				</>
			) : (
				<WarningException />
			)}
		</>
	);
};

export default DetailPost;

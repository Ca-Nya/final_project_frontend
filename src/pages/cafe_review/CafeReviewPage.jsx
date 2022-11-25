import { Main } from "../../common";
import { CafeReview } from "../../components/cafe_review";
import { useParams } from "react-router-dom";

const CafeReviewPage = () => {
	// 게시글 작성 페이지 파라미터
	const { id } = useParams();

	return (
		<Main>
			<CafeReview id={id} />
		</Main>
	);
};

export default CafeReviewPage;

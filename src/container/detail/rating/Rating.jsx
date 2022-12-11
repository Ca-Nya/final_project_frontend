import {
	SecondHeading,
	DataList,
	DataDesc,
	DataTerm,
	Margin,
	Flex,
} from "../../../components";
import { DetailRatings } from "../../../container/detail";

const Rating = ({ detailPostData, ratings }) => {
	return (
		<>
			<SecondHeading variant="title">
				카냐인 {detailPostData.memberNickname}님의 평가⭐️
			</SecondHeading>
			<Margin margin="20px 0 60px 0">
				<DetailRatings ratings={ratings} />
				<Margin margin="10px 0 0 0">
					<DataList variant="detail-rating">
						<Flex jc="center" ai="center" gap="10px">
							<DataTerm>카냐인의 평균 평점</DataTerm>
							<DataDesc>{detailPostData.totalRating}</DataDesc>
						</Flex>
					</DataList>
				</Margin>
			</Margin>
		</>
	);
};

export default Rating;

import {
	Box,
	Text,
	Button,
	FirstHeading,
	SecondHeading,
	DataList,
	DataDesc,
	DataTerm,
} from "../../common";
import { DetailMap, DetailRatings } from "../../components/detail";
import { useFetchDetailPost } from "../../querys";

const DetailPost = () => {
	const { data } = useFetchDetailPost();
	const ratings = [];
	const {
		address,
		boardContent,
		boardTitle,
		heartCount,
		imageList,
		rating,
		totalRating,
	} = data;

	// 별점을 배열에 추가
	for (let rate in rating) {
		ratings.push(rating[rate]);
	}

	return (
		<Box>
			<Box>
				<Button>수정</Button>
				<Button>삭제</Button>
			</Box>
			<FirstHeading>{boardTitle}</FirstHeading>
			<DataList>
				<DataTerm>작성일</DataTerm>
				<DataDesc>n월</DataDesc>
			</DataList>
			<Box>
				<DataList>
					<DataTerm>좋아요 수</DataTerm>
					<DataDesc>{heartCount}개</DataDesc>
				</DataList>
				<DataList>
					<DataTerm>평균점수</DataTerm>
					<DataDesc>{totalRating}</DataDesc>
				</DataList>
			</Box>
			<Box>
				<SecondHeading>이미지</SecondHeading>
				{/* {imageList.map(image => {
          })} */}
			</Box>
			<Box>
				<SecondHeading>내용</SecondHeading>
				<Text>{boardContent}</Text>
			</Box>
			<Box>
				<SecondHeading>평점</SecondHeading>
				<DetailRatings ratings={ratings} />
			</Box>
			<Box>
				<SecondHeading>위치</SecondHeading>
				<DetailMap searchPlace={address} />
			</Box>
		</Box>
	);
};

export default DetailPost;

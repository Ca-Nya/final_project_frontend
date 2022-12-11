import {
	Box,
	Image,
	Text,
	Margin,
	Flex,
	Button,
	FirstHeading,
	DataList,
	Hidden,
	DataTerm,
	DataDesc,
	StyledSlider,
} from "../../../components";
import hit from "../../../assets/icons/hit.png";

const Detail = ({
	navigate,
	data,
	authorization,
	nickname,
	onhandleRemove,
	id,
}) => {
	return (
		<Margin margin="160px 0 0 0">
			<Box variant="container">
				<Box variant="detail-container">
					<Flex ai="center">
						<FirstHeading variant="title">{data.communityTitle}</FirstHeading>
					</Flex>
					<Box variant="detail-info">
						<Flex jc="flex-end" ai="center">
							<Flex ai="center" gap="9px">
								<Image
									src={data.memberProfileImage}
									alt="프로필 이미지"
									variant="medium-profile"
									rank={localStorage.getItem("memberStatus")}
								/>
								<Flex fd="column" gap="3px">
									<DataList variant="">
										<Hidden>
											<DataTerm>작성자</DataTerm>
										</Hidden>
										<DataDesc variant="small-profile">
											{data.memberNickname}
										</DataDesc>
									</DataList>
									<DataList variant="detail-date">
										<Hidden>
											<DataTerm>작성일</DataTerm>
										</Hidden>
										<DataDesc>{data.createdAt}</DataDesc>
									</DataList>
								</Flex>

								<Flex ai="center" jc="flex-end" gap="10px">
									{nickname === data.memberNickname ? (
										<Flex jc="flex-end" gap="4px">
											<Button
												variant="detail-edit"
												onClick={() => {
													navigate(`/edit/${id}`);
												}}
											>
												수정
											</Button>
											|
											<Button variant="detail-edit" onClick={onhandleRemove}>
												삭제
											</Button>
										</Flex>
									) : (
										""
									)}
								</Flex>
							</Flex>
						</Flex>
					</Box>
					<Box variant="detail-content">
						<Flex gap="30px">
							<Box variant="detail-content-image-wraper">
								<Image
									src={data.communityImage}
									alt="리뷰 이미지"
									variant="detail-review"
								/>
							</Box>
							<Box variant="detail-content-desc">
								<Text>{data.communityContent}</Text>
							</Box>
						</Flex>
					</Box>
					<Flex jc="space-between" fd="center">
						<Button variant="chat" onClick={()=>{
							alert("comming soon")
						}}>글쓴이와 1:1 채팅하기</Button>
						<Box>
							<Flex>
								<Image variant="comu-hit-l" src={hit} alt={"조회수"} />
								<Text variant="cafe-review-rating-info">
									{" "}
									조회수 {data.communityHitCount}
								</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Margin>
	);
};

export default Detail;

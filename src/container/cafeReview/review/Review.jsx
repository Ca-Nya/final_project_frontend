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
} from "../../../components";
import { cafe_review_image_upload } from "../../../assets/icons";

const Review = ({
	onChangeInputTitleState,
	onGetImage,
	onDeleteImage,
	onChangeInputContentState,
	thumbnailImages,
	images,
}) => {
	return (
		<>
			<Margin margin="0 0 55px 0">
				<FirstHeading variant="title">리뷰 작성☕️</FirstHeading>
			</Margin>
			<Margin margin="0 0 25px 0">
				<Input
					variant="cafe-review-title"
					onChange={onChangeInputTitleState}
					placeholder="제목을 입력해주세요."
					type="text"
				/>
			</Margin>
			<Margin margin="0 0 20px 0">
				<Flex gap="13px">
					<Label htmlFor="cafe-review-image" variant="cafe-review-file-button">
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
							onChange={onGetImage}
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
									onClick={onDeleteImage(idx)}
									aria-label="이미지 삭제 버튼"
									variant="cafe-review-thumbnail-delete"
								/>
							</Box>
						);
					})}
				</Flex>
			</Margin>
			<TextArea
				onChange={onChangeInputContentState}
				placeholder="리뷰를 등록해주세요."
				variant="cafe-review-desc"
			/>
		</>
	);
};

export default Review;

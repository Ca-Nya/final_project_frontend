import {
	Margin,
	Box,
	Image,
	Flex,
	Button,
	Input,
	FirstHeading,
	Label,
	Hidden,
	TextArea,
} from "../../../components";

const Edit = ({
	onChangeComu,
	onChangeImage,
	editImgSrc,
	edit,
	detailComuData,
	onClickHandler,
	imageSrc,
	nickname,
}) => {
	return (
		<>
			<Box variant="container">
				<Margin margin="0 0 55px 0">
					<FirstHeading variant="title">커뮤니티 글 작성👥</FirstHeading>
				</Margin>
				<Margin margin="0 0 25px 0">
					<Input
						variant="cafe-review-title"
						type="text"
						name="communityTitle"
						value={edit?.communityTitle || ""}
						onChange={onChangeComu}
					/>
				</Margin>

				<Margin margin="0 0 0 0">
					<Label htmlFor="communityImage">
						<Box variant="comu-add">사진등록</Box>
					</Label>
					<Hidden>
						<Input
							name="editImg"
							id="communityImage"
							type="file"
							accept="image/*"
							placeholder="이미지업로드"
							multiple
							onChange={onChangeImage}
						/>
					</Hidden>
				</Margin>
				<Margin margin="25px 0 0 0">
					<Flex jc="center">
						{editImgSrc ? (
							<>
								<Image variant="comu-image" src={imageSrc} alt={"수정이미지"} />
							</>
						) : (
							<Image
								variant="comu-image"
								src={detailComuData?.communityImage}
								alt={detailComuData?.communityTitle}
							/>
						)}
					</Flex>
				</Margin>
				<Margin margin="40px auto">
					<TextArea
						autoComplete="off"
						type="text"
						name="communityContent"
						value={edit?.communityContent || ""}
						onChange={onChangeComu}
						variant="cafe-review-desc"
					/>
				</Margin>
				<Margin margin="40px auto">
					<Button variant="comu-add" onClick={onClickHandler}>
						커뮤니티 글 수정완료
					</Button>
				</Margin>
			</Box>
		</>
	);
};

export default Edit;

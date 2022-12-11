import {
	Button,
	Form,
	SecondHeading,
	Box,
	Margin,
	TextArea,
	Text,
	Flex,
	Input,
	FirstHeading,
	Label,
	Hidden,
	ThirdHeading,
	Image,
	DataList,
	DataTerm,
	DataDesc,
} from "../../../components";
import { cafe_review_image_upload } from "../../../assets/icons";
const Post = ({
	onClickHandler,
	onChangeInput,
	onChangeImage,
	navigate,
	imageSrc,
}) => {
	return (
		<>
			<Margin margin="160px auto">
				<Box variant="container">
					<Form onSubmit={onClickHandler}>
						<Margin margin="0 0 55px 0">
							<FirstHeading variant="title">커뮤니티 글 작성👥</FirstHeading>
						</Margin>
						<Margin margin="0 0 25px 0">
							<Input
								variant="cafe-review-title"
								onChange={onChangeInput}
								placeholder="제목을 입력해주세요."
								type="text"
							/>
						</Margin>

						<Margin margin="0 0 0 0">
							<Label htmlFor="communityImage">
								<Box variant="comu-add">사진등록</Box>
							</Label>
							<Hidden>
								<Input
									name="communityImage"
									id="communityImage"
									type={"file"}
									accept={"image/*"}
									placeholder="이미지업로드"
									onChange={onChangeImage}
								/>
							</Hidden>
						</Margin>
						<Margin margin="25px 0 0 0">
							<Flex jc="center">
								{imageSrc ? (
									<Image
										variant="comu-image"
										src={imageSrc}
										alt="이미지미리보기"
									/>
								) : (
									""
								)}
							</Flex>
						</Margin>
						<Margin margin="40px auto">
							<TextArea
								type="text"
								autoComplete="off"
								id="communityContent"
								name="communityContent"
								placeholder="내용을 입력해주세요"
								onChange={onChangeInput}
								variant="cafe-review-desc"
							/>
						</Margin>
						<Margin margin="40px auto">
							<Button variant="comu-add">커뮤니티 글 등록하기</Button>
						</Margin>
					</Form>
				</Box>

				{/* <Margin margin="160px 0 0 0">
				<form onSubmit={onClickHandler}>
					<input
						type="text"
						name="communityTitle"
						placeholder="제목을 입력해주세요."
						onChange={onChangeInput}
					/>
					<textarea
						type="text"
						autoComplete="off"
						id="communityContent"
						name="communityContent"
						placeholder="내용을 입력해주세요"
						onChange={onChangeInput}
					/>
					
					<input
						name="communityImage"
						type={"file"}
						accept={"image/*"}
						placeholder="이미지업로드"
						onChange={onChangeImage}
					/>
					<button>등록</button>
				</form>
			</Margin> */}
			</Margin>
		</>
	);
};

export default Post;

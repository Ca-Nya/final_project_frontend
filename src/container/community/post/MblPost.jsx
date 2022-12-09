import {
	Margin,
	Box,
	Form,
	Input,
	TextArea,
	Image,
	Button,
	Label,
	Hidden,
} from "../../../components";
import imageload from "../../../assets/icons/imageload.svg";

const MblPost = ({
	onClickHandler,
	onChangeInput,
	onChangeImage,
	navigate,
	imageSrc,
}) => {
	return (
		<>
			<Box size="container">
				<Form onSubmit={onClickHandler}>
					<Input
						size="l"
						type="text"
						name="communityTitle"
						placeholder="제목을 입력해주세요."
						onChange={onChangeInput}
					/>
					<Margin margin="25px 0 10px 0">
						<Label size="xl-image" htmlFor="communityImage">
							<Image size="l-image" src={imageload} />
						</Label>
						<Hidden>
							<Input
								id="communityImage"
								name="communityImage"
								type={"file"}
								accept={"image/*"}
								placeholder="이미지업로드"
								onChange={onChangeImage}
							/>
						</Hidden>
					</Margin>

					{imageSrc ? <Image size="xl" src={imageSrc} /> : null}

					<Margin margin="20px 0 32px 0">
						<TextArea
							size="l"
							type="text"
							autoComplete="off"
							id="communityContent"
							name="communityContent"
							placeholder="내용을 입력하세요"
							onChange={onChangeInput}
						/>
					</Margin>
					<Margin margin="0 0 32px 0">
						<Button size="l">커뮤니티 글 등록하기</Button>
					</Margin>					
				</Form>
			</Box>
		</>
	);
};

export default MblPost;

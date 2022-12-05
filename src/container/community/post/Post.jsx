import { Margin } from "../../../components";
const Post = ({
	onClickHandler,
	onChangeInput,
	onChangeImage,
	navigate,
	imageSrc,
}) => {
	return (
		<>
			<Margin margin="160px 0 0 0">
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
					<img src={imageSrc} alt="이미지미리보기" />
					<input
						name="communityImage"
						type={"file"}
						accept={"image/*"}
						placeholder="이미지업로드"
						onChange={onChangeImage}
					/>
					<button>등록</button>
				</form>
			</Margin>
		</>
	);
};

export default Post;

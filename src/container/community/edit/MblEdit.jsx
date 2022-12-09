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

const MblEdit = ({
	onChangeComu,
	onChangeImage,
	editImgSrc,
	edit,
	detailComuData,
	onClickHandler,
	imageSrc,
}) => {
	return (
		<>
			<Box size="container">
				<Input
					size="l"
					type="text"
					name="communityTitle"
					value={edit?.communityTitle || ""}
					onChange={onChangeComu}
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
				{editImgSrc ? (
					<>
						<Image size="xl" src={imageSrc} alt={"수정이미지"} />
					</>
				) : (
					<Image
						size="xl"
						src={detailComuData?.communityImage}
						alt={detailComuData?.communityTitle}
					/>
				)}

				{imageSrc ? <Image size="xl" src={imageSrc} /> : null}

				<Margin margin="20px 0 32px 0">
					<TextArea
						size="l"
						type="text"
						autoComplete="off"
						id="communityContent"
						name="communityContent"
						value={edit?.communityContent || ""}
						onChange={onChangeComu}
					/>
				</Margin>
				<Margin margin="0 0 32px 0">
					<Button size="l" onClick={onClickHandler}>
						수정완료
					</Button>
				</Margin>
			</Box>
			{/* <input
				type="text"
				name="communityTitle"
				value={edit?.communityTitle || ""}
				onChange={onChangeComu}
			/>
			<input
				type="text"
				name="communityContent"
				value={edit?.communityContent || ""}
				onChange={onChangeComu}
			/>
			<input
				name="editImg"
				type="file"
				accept="image/*"
				placeholder="이미지업로드"
				multiple
				onChange={onChangeImage}
			/>
			{editImgSrc ? (
				<>
					<img src={imageSrc} alt={"수정이미지"} />
				</>
			) : (
				<img
					src={detailComuData?.communityImage}
					alt={detailComuData?.communityTitle}
				/>
			)} */}
		</>
	);
};

export default MblEdit;

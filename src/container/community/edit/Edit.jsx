const Edit = ({
	onChangeComu,
	onChangeImage,
	editImgSrc,
	edit,
	detailComuData,
	onClickHandler,
	imageSrc
 }) => {
	return (
	<>
		<input
					type="text"
					name="communityTitle"
					value={edit?.communityTitle||""}
					onChange={onChangeComu}
				/>
				<input
					type="text"
					name="communityContent"
					value={edit?.communityContent||""}
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
				)}

				<button onClick={onClickHandler}>수정완료</button>
	</>
	);
};

export default Edit;

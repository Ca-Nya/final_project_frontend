import React from "react";

const Comment = ({
	item,
	edit,
	setEdit,
	handleEdit,
	handleEditComplete,
	handleRemove,
}) => {
	return (
		<>
			{edit ? (
				<>
					<input
						type="text"
						name="communityCommentContent"
						defaultValue={item?.communityCommentContent}
						required={item?.communityCommentContent}
						onChange={handleEdit}
					/>
					<button onClick={handleEditComplete}>수정완료</button>
				</>
			) : (
				<>
					<p>
						{item?.memberNickname}님 {item?.communityCommentContent}
					</p>
					<button
						onClick={() => {
							setEdit(!edit);
						}}
					>
						수정
					</button>
					<button onClick={handleRemove}>삭제</button>
				</>
			)}
		</>
	);
};

export default Comment;

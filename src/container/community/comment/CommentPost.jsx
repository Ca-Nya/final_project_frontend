import {
	Button,
	Form,
	SecondHeading,
	Box,
	Margin,
	TextArea,
	Flex,
} from "../../../components";

const CommentPost = ({ onClickHandler, ment, setMent, nickname }) => {
	return (
		<Box variant="container">
			<Margin margin="30px 0">
				<Box variant="comment-input-wrap">
					{nickname ? (
						<SecondHeading variant="comment-user-nickname">
							{nickname}
						</SecondHeading>
					) : null}
					<Form onSubmit={onClickHandler}>
						<Margin margin="10px 0">
							<TextArea
								name="comment"
								placeholder="댓글을 남겨주세요."
								value={ment}
								onChange={e => {
									const comment = e.target.value;
									setMent(comment);
								}}
								variant="comment"
							/>
						</Margin>
						<Button variant="comment-add">
							<Flex jc="flex-end">등록 </Flex>
						</Button>
					</Form>
				</Box>
			</Margin>
		</Box>
	);
};

export default CommentPost;

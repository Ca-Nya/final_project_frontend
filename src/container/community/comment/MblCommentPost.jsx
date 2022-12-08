import {
	Button,
	Form,
	SecondHeading,
	Box,
	Margin,
	TextArea,
	Flex,
	Text,
	Input,
} from "../../../components";

const MblCommentPost = ({ onClickHandler, ment, setMent, nickname }) => {
	return (
		<Box size="container">
			<Box
				size="container-s"
				style={{
					height: "80px",
					padding: "10px",
					borderRadius: "5px",
					border: "1px solid #d9d9d9",
				}}
			>
				{nickname ? (
					<Text size="m" style={{ fontWeight: "700" }}>
						{nickname}
					</Text>
				) : null}
				<Form onSubmit={onClickHandler}>
					<Flex jc="space-around" style={{ margin: "6px 0 0 0" }}>
						<TextArea
							size="m"
							style={{ height: "40px", border: "none" }}
							name="communityCommentContent"
							placeholder="댓글을 남겨주세요."
							value={ment}
							onChange={e => {
								const comment = e.target.value;
								setMent(comment);
							}}
						/>
						<Button size="xs" style={{backgroundColor:"transparent",border:"2px solid #d9d9d9", margin:"auto 0 0 auto"}}>등록</Button>
					</Flex>
				</Form>
			</Box>
		</Box>
	);
};

export default MblCommentPost;

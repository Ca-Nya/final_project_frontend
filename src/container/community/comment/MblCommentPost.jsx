import { Navigate } from "react-router-dom";
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

const MblCommentPost = ({ onClickHandler, ment, setMent, nickname,navigate }) => {
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
				{nickname ? <Text size="m">{nickname}</Text> : null}
				<Form onSubmit={onClickHandler}>
					<Flex jc="space-around" style={{ margin: "6px 0 0 0" }}>
						<TextArea
							size="m"						
							name="communityCommentContent"
							placeholder="댓글을 남겨주세요.(최대 120자)"
							maxLength={110}
							value={ment}
							onChange={e => {
								const comment = e.target.value;
								setMent(comment);
							}}
						/>
						<Margin margin="auto 0 0 auto">
							<Button size="xs-trans">등록</Button>
						</Margin>
					</Flex>
				</Form>
			</Box>
			<Margin margin="10px 0 0 266px">
			<Button size="xs"
			onClick={()=>{
				navigate("/community")
			}}
			>목록</Button>
			</Margin>
		</Box>
	);
};

export default MblCommentPost;

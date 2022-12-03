import {
	Input,
	Button,
	Form,
	Text,
	Margin,
	Flex,
	Box,
} from "../../../components";

const BoardList = ({ navigate, data, authorization, nickname }) => {
	console.log("BoardList==>", data);
	return (
		<>
			{data && data.length > 0 ? (
				<Box>
					{data.map(item => {
						return (
							<Box key={item.communityId}>
								<Text
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item.communityTitle}
								</Text>
							</Box>
						);
					})}
				</Box>
			) : (
				<p>작성된 게시글이 없습니다.</p>
			)}
			{authorization ? (
				<button
					onClick={() => {
						navigate("/post");
					}}
				>
					글쓰기
				</button>
			) : (
				<button
					onClick={() => {
						alert("로그인 후 글쓰기 가능합니다.");
						navigate("/join");
					}}
				>
					글쓰기
				</button>
			)}
		</>
	);
};

export default BoardList;

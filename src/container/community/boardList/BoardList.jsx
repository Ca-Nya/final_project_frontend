import {
	Box,
	Flex,
	Button,
	Strong,
} from "../../../components";

const BoardList = ({ navigate, data, authorization, nickname }) => {
	console.log("BoardList==>", data);
	return (
		<>
			{data && data.length > 0 ? (
				<div>
					{data.map(item => {
						return (
							<div key={item.communityId}>
								<p
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item.communityTitle}
								</p>
							</div>
						);
					})}
				</div>
			) : (
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">작성한 게시글이 없습니다😭</Strong>
						<Button onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
			)}
			{nickname ? (
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

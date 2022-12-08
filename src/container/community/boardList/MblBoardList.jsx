import { Box, Image, Text, Margin, Flex, Button } from "../../../components";

const MblBoardList = ({ navigate, data, authorization, nickname }) => {
	return (
		<Box>
			{data && data.length > 0 ? (
				<Box size="container">
					{authorization ? (
						<Box size="l" style={{ height: "34px" }}>
							<Flex jc="flex-end">
								<Button
									size="xs"
									style={{ backgroundColor: "#eaeaea" }}
									onClick={() => {
										navigate("/post");
									}}
								>
									글쓰기
								</Button>
							</Flex>
						</Box>
					) : (
						<Button
							size="xs"
							style={{ backgroundColor: "#eaeaea" }}
							onClick={() => {
								alert("로그인 후 글쓰기 가능합니다.");
								navigate("/join");
							}}
						>
							글쓰기
						</Button>
					)}
					{data.map(item => {
						return (
							<Box
								size="l"
								style={{ borderBottom: "1px solid #D9D9D9" }}
								key={item.communityId}
							>
								<Image
									size="s"
									src={item.communityImage}
									alt={item.communityTitle}
								/>
								<Text
									size="m"
									style={{ fontWeight: "800" }}
									onClick={() => {
										navigate(`/community/${item.communityId}`);
									}}
								>
									{item.communityTitle}
								</Text>
								<Margin margin="6px auto">
									<Text
										size="s"
										onClick={() => {
											navigate(`/community/${item.communityId}`);
										}}
									>
										{item.communityContent}
									</Text>
								</Margin>
								<Margin margin="6px auto">
									<Flex gap="2px">
										<Text size="s" style={{ fontWeight: "500" }}>
											by{" "}
										</Text>
										<Text size="s">{item.memberNickname}</Text>
									</Flex>
								</Margin>
							</Box>
						);
					})}
				</Box>
			) : (
				<p>작성된 게시글이 없습니다.</p>
			)}
		</Box>
	);
};

export default MblBoardList;

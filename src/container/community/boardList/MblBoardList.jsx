import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import hit from "../../../assets/icons/hit.png";

const MblBoardList = ({ navigate, data, authorization, nickname }) => {
	return (
		<Box>
			{data && data.length > 0 ? (
				<Box size="container">
					{authorization ? (
						// <Box size="nav-s" style={{ border: "1px solid black" }}>
						<Margin margin="0 0 15px 0">
							<Flex jc="flex-end" ai="center">
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
						</Margin>
					) : (
						// </Box>
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
							<Margin margin="10px auto">
								<Box
									size="container-s"
									style={{ borderBottom: "1px solid #D9D9D9" }}
									key={item.communityId}
								>
									<Flex>
										<Box
											size="container-m"
											style={{ border: "1px solid black" }}
										>
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
													style={{ height: "63px" }}
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
										<Box>
											<Flex style={{ position: "relative" }}>
												<Image
													size="s"
													src={item.communityImage}
													alt={item.communityTitle}
												/>
												
												<Flex gap="2px" style={{ position: "absolute",top:"6px", right:"10px" }} jc="flex-end">
													<Image src={hit} alt={"조회수"} />
													<Text size="s" style={{ color: "white" }}>
														{item.communityHitCount}
													</Text>
												</Flex>
												
											</Flex>
										</Box>
									</Flex>
								</Box>
							</Margin>
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

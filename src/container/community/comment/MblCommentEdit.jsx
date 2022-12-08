import { Box, Image, Margin, Text, Flex, Input } from "../../../components";

const MblCommentEdit = ({
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
					<Box size="container">
						<Margin margin="6px auto">
							<Box
								size="container-s"
								style={{
									height: "35px",
									display: "flex",
									alignItem: "center",
								}}
							>
								<Image
									size="xs-r"
									src={item.memberProfileImage}
									alt={item.memberNickname}
									rank={localStorage.getItem("memberStatus")}
								></Image>
								<Flex
									jc="space-evenly"
									ai="center"
									style={{ padding: "0px", width: "100%" }}
								>
									<Flex fd="column" gap="2px" style={{ marginLeft: "6px" }}>
										<Flex ai="center">
											<Text size="m" style={{ fontWeight: "650" }}>
												{item.memberNickname}
											</Text>
											<Flex
												style={{ width: "50px", margin: "6px 0 0 8px" }}
												gap="6px"
											>
												<Text size="s" onClick={handleEditComplete}>
													완료
												</Text>
											</Flex>
										</Flex>
										<Input
											size="s"
											type="text"
											name="communityCommentContent"
											defaultValue={item?.communityCommentContent}
											required={item?.communityCommentContent}
											onChange={handleEdit}
										/>
									</Flex>
								</Flex>
								<Margin margin="5px 0 0 0" style={{ width: "50px" }}>
									<Text size="s">{item.date}</Text>
								</Margin>
							</Box>
							<Box
								size="container-s"
								style={{
									height: "10px",
									borderBottom: "1px solid #d9d9d9",
								}}
							></Box>
						</Margin>
					</Box>
				</>
			) : (
				<Box size="container">
					<Margin margin="6px auto">
						<Box
							size="container-s"
							style={{
								height: "35px",
								display: "flex",
								alignItem: "center",
							}}
						>
							<Image
								size="xs-r"
								src={item.memberProfileImage}
								alt={item.memberNickname}
								rank={localStorage.getItem("memberStatus")}
							></Image>
							<Flex
								jc="space-evenly"
								ai="center"
								style={{ padding: "0px", width: "100%" }}
							>
								<Flex fd="column" gap="2px" style={{ marginLeft: "6px" }}>
									<Flex ai="center">
										<Text size="m" style={{ fontWeight: "650" }}>
											{item.memberNickname}
										</Text>
										<Flex
											style={{ width: "50px", margin: "6px 0 0 8px" }}
											gap="6px"
										>
											<Text
												size="s"
												onClick={() => {
													setEdit(!edit);
												}}
											>
												수정
											</Text>
											<Text size="s" onClick={handleRemove}>
												삭제
											</Text>
										</Flex>
									</Flex>
									<Box size="m-box">
										<Text size="s">{item?.communityCommentContent}</Text>
									</Box>
								</Flex>
							</Flex>
							<Margin margin="5px 0 0 0" style={{ width: "50px" }}>
								<Text size="s">{item.date}</Text>
							</Margin>
						</Box>
					</Margin>
					<Margin margin="0 0 6px 0">
						<Box
							size="container-s"
							style={{
								height: "10px",
								borderBottom: "1px solid #d9d9d9",
							}}
						></Box>
					</Margin>
				</Box>
			)}
		</>
	);
};

export default MblCommentEdit;

import { Box, Image, Margin, Text, Flex, Button } from "../../../components";

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
				<Box size="container">
					<Margin margin="6px auto">
						<Box
							size="container-s"
							style={{
								height: "35px",
								border: "1px solid black",
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
								style={{ padding: "6px", width: "100%" }}
							>
								<Flex fd="column" gap="2px">
									<Flex>
										<Text size="m" style={{ fontWeight: "800" }}>
											{item.memberNickname}
										</Text>
										<Box>
											<Button
												size="xs"
												onClick={() => {
													setEdit(!edit);
												}}
											>
												수정
											</Button>
											<Button size="xs" onClick={handleRemove}>
												삭제
											</Button>
										</Box>
									</Flex>
									<Text size="s">{item?.communityCommentContent}</Text>
								</Flex>
							</Flex>
							<Margin margin="5px 0 0 0" style={{ width: "50px" }}>
								<Text size="s">{item.date}</Text>
							</Margin>
						</Box>
					</Margin>
				</Box>
			)}
		</>
	);
};

export default MblCommentEdit;

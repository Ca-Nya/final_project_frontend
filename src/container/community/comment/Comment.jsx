import {
	Box,
	Image,
	Margin,
	Text,
	DataList,
	Flex,
	DataDesc,
	DataTerm,
	SecondHeading,
	Hidden,
} from "../../../components";
import ComuCommentEdit from "../ComuCommentEdit";

const Comment = ({ item }) => {
	return (
		<Box>
			<Margin margin="10px 0">
				<Flex jc="space-between" ai="center" gap="17px">
					<Box>
						<Flex jc="center" ai="center" gap="10px">
							<Box>
								<Flex ai="center" jc="center">
									<Image
										src={item.memberProfileImage}
										alt="유저 프로필"
										variant="comment-profile"
									/>
								</Flex>
							</Box>
							<Box variant="comment-user-info">
								<Flex fd="column" jc="center" gap="7px">
									<SecondHeading variant="comment-user-nickname">
										{item.memberNickname}
									</SecondHeading>
									<Text variant="comment-user-content">
										{item.communityCommentContent}
									</Text>
								</Flex>
							</Box>
						</Flex>
					</Box>
					<Box variant="comment-info">
						<Flex fd="column" jc="center" ai="flex-end" gap="10px">
							<DataList variant="comment-date">
								<Hidden>
									<DataTerm>작성일</DataTerm>
								</Hidden>
								<DataDesc>{item.date}</DataDesc>
							</DataList>
						</Flex>
					</Box>
				</Flex>
			</Margin>

			{/* 
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
							</Flex>
							<Box size="m-box">
								<Text size="s">{item?.communityCommentContent}</Text>
							</Box>
						</Flex>
					</Flex>
					<Margin margin="5px 0 0 0">
						<Box size="s-box">
							<Text size="s">{item.date}</Text>
						</Box>
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
			<Text>{item.memberNickname}</Text>
			<Text>{item.communityCommentContent}</Text>
			<Image src={item.memberProfileImage} />
			<Text>{item.date}</Text> */}
		</Box>
	);
};

export default Comment;

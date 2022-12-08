import React from "react";
import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import MblBoardListItem from "./MblBoardListItem";
import hit from "../../../assets/icons/hit.png";

const MblBoardList = ({ navigate, data, authorization, nickname }) => {
	return (
		<Box>
			{nickname ? (
				<Box size="container">
<<<<<<< HEAD
					{authorization ? (
						<Box size="l" style={{ height: "34px" }}>
							<Flex jc="flex-end">
=======
					<Margin margin="0 0 15px 0">
						<Box size="nav-s">
							<Flex ai="center" jc="flex-end">
>>>>>>> 4e3bd57ab7794915fc0ff735c602c712e73753dd
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
<<<<<<< HEAD
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
=======
					</Margin>
				</Box>
			) : (
				<Box size="container">
					<Margin margin="0 0 15px 0">
						<Box size="nav-s">
							<Flex ai="center" jc="flex-end">
								<Button
									size="xs"
									style={{ backgroundColor: "#eaeaea" }}
>>>>>>> 4e3bd57ab7794915fc0ff735c602c712e73753dd
									onClick={() => {
										alert("로그인 후 글쓰기 가능합니다.");
										navigate("/join");
									}}
								>
<<<<<<< HEAD
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
=======
									글쓰기
								</Button>
							</Flex>
						</Box>
					</Margin>
				</Box>
			)}
			{data.pages[0].page ? (
				<Box size="container">
					{data?.pages?.map((page, idx) => (
						<React.Fragment key={idx}>
							{page?.page?.map(item => (
								<>
									<MblBoardListItem
										key={item.communityId}
										item={item}
										navigate={navigate}
									/>
								</>
							))}
						</React.Fragment>
					))}
>>>>>>> 4e3bd57ab7794915fc0ff735c602c712e73753dd
				</Box>
			) : (
				<p>작성된 게시글이 없습니다.</p>
			)}
		</Box>
	);
};

export default MblBoardList;

import React from "react";
import { Box, Image, Text, Margin, Flex, Button } from "../../../components";
import MblBoardListItem from "./MblBoardListItem";
import hit from "../../../assets/icons/hit.png";

const MblBoardList = ({ navigate, data, authorization, nickname }) => {
	return (
		<Box>
			{nickname ? (
				<Box size="container">
					<Margin margin="0 0 15px 0">
						<Box size="nav-s">
							<Flex ai="center" jc="flex-end">
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
									onClick={() => {
										alert("로그인 후 글쓰기 가능합니다.");
										navigate("/join");
									}}
								>
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
				</Box>
			) : (
				<p>작성된 게시글이 없습니다.</p>
			)}
		</Box>
	);
};

export default MblBoardList;

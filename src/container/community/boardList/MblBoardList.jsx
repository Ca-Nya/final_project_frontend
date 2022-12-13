import React from "react";
import {
	Box,
	Image,
	Text,
	Margin,
	Flex,
	Button,
	Strong,
} from "../../../components";
import MblBoardListItem from "./MblBoardListItem";
import hit from "../../../assets/icons/hit.png";

const MblBoardList = ({ navigate, data, authorization, nickname }) => {
	return (
		<Margin margin="0 0 180px 0">
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
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">작성한 게시글이 없습니다😭</Strong>
						<Button onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
			)}
		</Margin>
	);
};

export default MblBoardList;

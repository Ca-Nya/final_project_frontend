import React from "react";
import { Box, Flex, Button, Strong } from "../../../components";
import BoardListItem from "./BoardListItem";

const BoardList = ({ navigate, data, authorization, nickname }) => {
	console.log("BoardList==>", data);
	return (
		<Box variant="container">
			





			
			<Flex jc="flex-end">
				{nickname ? (
					<Button
						variant="post"
						onClick={() => {
							navigate("/post");
						}}
					>
						글쓰기
					</Button>
				) : (
					<Button
						variant="post"
						onClick={() => {
							alert("로그인 후 글쓰기 가능합니다.");
							navigate("/join");
						}}
					>
						글쓰기
					</Button>
				)}
			</Flex>
			{data.pages[0].page ? (
				<Box>
					{data?.pages?.map((page, idx) => (
						<React.Fragment key={idx}>
							{page?.page?.map(item => (
								<>
									<BoardListItem
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
		</Box>
	);
};

export default BoardList;

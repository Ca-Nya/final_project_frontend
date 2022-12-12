import React from "react";
import {
	Box,
	Button,
	Text,
	Margin,
	Flex,
	Strong,
} from "../../../components";
import BoardItem from "./BoardItem";

const Board = ({ data, navigate, onDeletePost, onEditPost }) => {
	return (
		<Box>
			<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
				<Box variant="mypage-nav">
					<Text variant="title">내가 쓴 글 ✍🏻</Text>
				</Box>
			</Margin>
			<Box>
				{data && data?.pages[0].page.length ? (
					<Box variant="reverse">
						{data?.pages?.map((page, idx) => (
							<React.Fragment key={idx}>
								{page?.page?.map(item => (
									<Box>
										<BoardItem
											key={item.boardId}
											item={item}
											navigate={navigate}
											onDeletePost={onDeletePost}
											onEditPost={onEditPost}
										/>
									</Box>
								))}
							</React.Fragment>
						))}
					</Box>
				) : (
					<Box variant="spinner-wrap">
						<Flex fd="column" jc="center" ai="center" gap="100px">
							<Strong variant="warning">좋아요한 게시물이 없습니다😭</Strong>
							<Button onClick={() => navigate(-1)} variant="cafe-review-post">
								돌아가기
							</Button>
						</Flex>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Board;

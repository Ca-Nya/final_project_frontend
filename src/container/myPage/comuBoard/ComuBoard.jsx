import React from "react";
import {
	Box,
	Button,
	Text,
	Margin,
	Flex,
	Strong,
} from "../../../components";
import ComuBoardItem from "./ComuboardItem";

const ComuBoard = ({ data, navigate, onDeleteComuPost, onEditComuPost }) => {
	return (
		<Box>
			<Box>
				<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
					<Box variant="mypage-nav">
						<Text variant="title">커뮤니티 👥</Text>
					</Box>
				</Margin>
				<Box>
					{data?.pages[0]?.page?.length ? (
						<Box>
							{data?.pages?.map((page, idx) => (
								<React.Fragment key={idx}>
									{page?.page?.map(item => (
										<>
											<ComuBoardItem
												key={item?.boardId}
												item={item}
												navigate={navigate}
												onDeleteComuPost={onDeleteComuPost}
												onEditComuPost={onEditComuPost}
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
			</Box>
		</Box>
	);
};

export default ComuBoard;

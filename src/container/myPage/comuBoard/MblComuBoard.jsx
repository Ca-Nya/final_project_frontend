import React from "react";
import {
	Box,
	Button,
	Image,
	Text,
	Margin,
	Flex,
	Strong,
} from "../../../components";
import MblComuBoardItem from "./MblComuBoardItem";

const MblComuBoard = ({ data, navigate, onDeleteComuPost, onEditComuPost }) => {
	return (
		<Box sixe="container">
			{data?.pages[0].page.length ? (
				<Box size="reverse">
					{data?.pages?.map((page, idx) => (
						<React.Fragment key={idx}>
							{page?.page?.map(item => (
								<>
									<MblComuBoardItem
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
						<Button size="l" onClick={() => navigate(-1)} variant="cafe-review-post">
							돌아가기
						</Button>
					</Flex>
				</Box>
			)}
		</Box>
	);
};

export default MblComuBoard;

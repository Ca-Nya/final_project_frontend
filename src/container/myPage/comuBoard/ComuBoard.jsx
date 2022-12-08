import React from "react";
import { Box, Button, Image, Text, Margin, Flex } from "../../../components";
import ComuBoardItem  from "./ComuboardItem";

const ComuBoard = ({ data, navigate, onDeleteComuPost, onEditComuPost }) => {
	return (
		<Box>
			<Box>
				<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
					<Box variant="mypage-nav">
						<Text variant="title">커뮤니티 🌈</Text>
					</Box>
				</Margin>
				{data.pages[0].page ? (
					 <>
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
				 </>
				) : (
					<Box>
						<Text variant="comment"> 작성한 게시물이 없습니다.</Text>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default ComuBoard;

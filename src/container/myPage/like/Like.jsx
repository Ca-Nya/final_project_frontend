import React from "react";
import { Box, Image, Text, Margin, Flex } from "../../../components";
import { LikeItem } from "../like";

const Like = ({ data, navigate }) => {
	console.log("pages=====>", data.pages);
	return (
		<Box>
			<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
				<Box variant="mypage-nav">
					<Text variant="title">좋아요 한 글 ❣️ </Text>
				</Box>
			</Margin>
			{data.pages[0].page ? (
				<>
					{data?.pages.map((page, idx) => (
						<React.Fragment key={idx}>
							{page.page?.map(like => (
								<>
									<LikeItem
										key={like.boardId}
										like={like}
										navigate={navigate}
									/>
								</>
							))}
						</React.Fragment>
					))}
				</>
			) : (
				<Box>
					<Text variant="comment"> 좋아요한 게시물이 없습니다.</Text>
				</Box>
			)}
		</Box>
	);
};

export default Like;

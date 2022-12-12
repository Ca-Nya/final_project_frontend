import React from "react";
import {
	Box,
	Image,
	Text,
	Margin,
	Flex,
	Strong,
	Button,
} from "../../../components";
import { LikeItem } from "../like";

const Like = ({ data, navigate }) => {
	return (
		<Box>
			<Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
				<Box variant="mypage-nav">
					<Text variant="title">좋아요 한 글 ❣️ </Text>
				</Box>
			</Margin>
			<Box variant="reverse">
				{data.pages[0].page.length ? (
					<Flex fd="column-reverse">
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
					</Flex>
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

export default Like;

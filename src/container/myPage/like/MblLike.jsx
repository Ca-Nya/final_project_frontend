import React from "react";
import {
	Box,
	Button,
	Flex,
	Strong,
	Text,
	Image,
	Margin,
} from "../../../components";
import arrow from "../../../assets/icons/left_arrow.svg";
import { MblLikeItem } from "../like";
import { isProfile } from "../../../recoil/Atom";

const MblLike = ({ data, navigate, setProfile }) => {
	return (
		<Box size="container">
			<Margin margin="10px auto">
				<Flex ai="center">
					<Box size="nav-white">
						<Margin margin="10px">
							<Flex ai="center" gap="98px">
								<Image
									src={arrow}
									onClick={() => {
										navigate(-1);
										setProfile(isProfile);
									}}
								/>
								<Text size="lg">좋아요 한 글</Text>
							</Flex>
						</Margin>
					</Box>
				</Flex>
			</Margin>
			{data.pages[0].page.length ? (
				<>
					{data?.pages.map((page, idx) => (
						<React.Fragment key={idx}>
							{page.page?.map(like => (
								<>
									<MblLikeItem
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
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">좋아요한 게시물이 없습니다😭</Strong>
						<Button
							size="l"
							onClick={() => {
								navigate(-1);
								setProfile(isProfile);
							}}
						>
							돌아가기
						</Button>
					</Flex>
				</Box>
			)}
		</Box>
	);
};

export default MblLike;

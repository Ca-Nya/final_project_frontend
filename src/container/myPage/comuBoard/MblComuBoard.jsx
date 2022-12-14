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
import MblComuBoardItem from "./MblComuBoardItem";
import arrow from "../../../assets/icons/left_arrow.svg";
import { isProfile } from "../../../recoil/Atom";

const MblComuBoard = ({ data, navigate, onDeleteComuPost, onEditComuPost,setProfile }) => {
	return (
		<Box sixe="container">
			<Margin margin="10px auto">
				<Flex ai="center">
					<Box size="nav-white">
						<Margin margin="10px">
							<Flex ai="center" gap="98px">
								<Image src={arrow} onClick={()=>{                                    
                                    navigate(-1)
                                    setProfile(isProfile)
                                }}/>
								<Text size="lg">커뮤니티 글</Text>
							</Flex>
						</Margin>
					</Box>
				</Flex>
			</Margin>
			{data?.pages[0].page.length ? (
				<>
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
				</>
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

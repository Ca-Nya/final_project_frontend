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
import MblBoardItem from "./MlbBoardItem";
import arrow from "../../../assets/icons/left_arrow.svg";
import { isProfile } from "../../../recoil/Atom";



const MblBoard = ({ data, navigate, onDeletePost, onEditPost,setProfile }) => {
	return (
		<Box size="container">
			<Margin margin="10px auto">
				<Flex ai="center">
					<Box size="nav-white">
						<Margin margin="10px">
							<Flex ai="center" gap="98px">
								<Image src={arrow} onClick={()=>{                                    
                                    navigate(-1)
                                    setProfile(isProfile)
                                }}/>
								<Text size="lg">내가 쓴 글</Text>
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
									<MblBoardItem
										key={item.boardId}
										item={item}
										navigate={navigate}
										onDeletePost={onDeletePost}
										onEditPost={onEditPost}
									/>
								</>
							))}
						</React.Fragment>
					))}
				</>
			) : (
				<Box variant="spinner-wrap">
					<Flex fd="column" jc="center" ai="center" gap="100px">
						<Strong variant="warning">작성한 게시물이 없습니다😭</Strong>
						<Button
							size="l"
							onClick={() => navigate(-1)}
							variant="cafe-review-post"
						>
							돌아가기
						</Button>
					</Flex>
				</Box>
			)}
		</Box>
	);
};

export default MblBoard;

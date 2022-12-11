import React from "react";
import { Box, Button, Image, Text, Margin, Flex, Strong } from "../../../components";
import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";
import  MblBoardItem from "./MlbBoardItem";

const MblBoard = ({ data, navigate, onDeletePost, onEditPost }) => {
	return ( 
    <Box size="container">      
        {data.pages[0].page ? (
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
                <Strong variant="warning">
                    좋아요한 게시물이 없습니다😭 
                </Strong>
                <Button onClick={() => navigate(-1)} variant="cafe-review-post">
                    돌아가기
                </Button>
            </Flex>
        </Box>
        )}
    </Box>);
};

export default MblBoard;

import React from "react";
import { Box, Button, Image, Text, Margin, Flex } from "../../../components";
import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";
import { BoardItem } from "../board";

const Board = ({
    data,
    navigate,
    onDeletePost,
    onEditPost,
}) => {
  return (
    <Box>
    <Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
        <Box variant="mypage-nav">
            <Text variant="title">내가 쓴 글 ✍🏻</Text>
        </Box>
    </Margin>
    {data.pages[0].page ? (
        <>
        {data?.pages?.map((page, idx) => (
            <React.Fragment key={idx}>
                {page?.page?.map(item => (
                    <>
                        <BoardItem
                            key={item.boardId}
                            item={item}
                            navigate={navigate}
                            onDeletePost={onDeletePost}
                            onEditPost={onDeletePost}
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
  )
}

export default Board

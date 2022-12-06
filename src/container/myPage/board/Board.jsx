import { Box, Button, Image, Text, Margin, Flex } from "../../../components";
import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";

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
    {data && data?.length > 0 ? (
        <Box>
            {data?.map(item => {
                return (
                    <Box variant="board-box" key={item.boardId}>
                        <Margin margin="2.6vw 0.3vw 0.9vw 0.3vw">
                            <Flex jc="space-between">
                                <Image
                                    variant="myboard-post"
                                    src={item.imageList[0].imageUrl}
                                    alt={item.boardTitle}
                                />
                                <Box>
                                    <Flex fd="column">
                                        <Box variant="board-smaillbox">
                                            <Margin margin="0.9vw 0 0 2.2vw">
                                                <Text
                                                    variant="board-title"
                                                    onClick={() => {
                                                        navigate(`/detail/post/${item.boardId}`);
                                                    }}
                                                >
                                                    {item.boardTitle}
                                                </Text>
                                                <Margin margin="1.1vw 0 0 0.4vw">
                                                    <Text variant="board-content">
                                                        {item.boardContent}
                                                    </Text>
                                                </Margin>
                                            </Margin>
                                        </Box>
                                        <Margin margin="0.9vw 0 0.4vw 2.2vw">
                                            <Box variant="board-inbox">
                                                <Flex jc="space-between">
                                                    <Text variant="comment-date">
                                                        {item.boardCreatedAt}
                                                    </Text>

                                                    <Box variant="board-minibutton">
                                                        <Flex gap="0.9vw">
                                                            <Button
                                                                variant="mypage"
                                                                onClick={onEditPost(item)}
                                                            >
                                                                수정
                                                                <Image variant="profile-edit" src={Edit} />
                                                            </Button>
                                                            <Button
                                                                variant="mypage"
                                                                onClick={onDeletePost(item)}
                                                            >
                                                                삭제
                                                                <Image
                                                                    variant="profile-edit"
                                                                    src={Delete}
                                                                />
                                                            </Button>
                                                        </Flex>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Margin>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Margin>

                        {/* {item.commentContent && item.commentContent ? (
                            <li>댓글:{item.commentContent}</li>
                        ) : (
                            <li>
                                <p>댓글이 없습니다.</p>
                            </li>
                        )} */}
                        {/* <li>총댓글갯수:{item.commentCount}</li> */}
                        {/* <li>주소:{item.address}</li> */}
                        {/* <li>평점:{item.totalRating}</li> */}
                    </Box>
                );
            })}
        </Box>
    ) : (
        <Box>
            <Text variant="comment"> 작성한 게시물이 없습니다.</Text>
        </Box>
    )}
</Box>
  )
}

export default Board

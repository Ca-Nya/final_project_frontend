import {
	Box,
	Input,
	Button,
	Image,
	Text,
	Margin,
	Flex,
} from "../../../components";
import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";

const ComuComment = ({	edit,
  setEdit,
editComment,
navigate,
  comment,
onDeleteComment,
onEditComment,
onhandleEdit,
ondelMutation,}) => {
  return (
    <Box>
    {edit ? (
      <Box>
        <Margin margin="0 0 10px 0">
          <Box variant="comment-box">
            <Margin margin="17px 22px 0 22px">
              <Box variant="guide">
                <Flex jc="space-between">
                  <Input
                    variant="comment-edit"
                    type="text"
                    name="commentContent"
                    defaultValue={comment?.communityCommentContent}
                    required={comment?.communityCommentContent}
                    onChange={onhandleEdit}
                  />
                  <Text variant="comment-date">
                    {comment?.communityCommentCreatedAt}
                  </Text>
                </Flex>
              </Box>
            </Margin>
            <Margin margin="10px 20px 0 22px">
              <Box variant="board-minibutton">
                <Flex gap="10px" jc="space-between">
                  <Text
                    variant="comment-title"
                    onClick={() => {
                      navigate(`/community/${comment?.communityId}`);
                    }}
                  >
                    {comment?.communityTitle}
                  </Text>
                  <Box>
                    <Button variant="mypage" onClick={onEditComment}>
                      완료
                      <Image variant="profile-edit" src={Edit} />
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Margin>
          </Box>
        </Margin>
      </Box>
    ) : (
      <Box>
        <Margin margin="0 0 10px 0">
          <Box variant="comment-box">
            <Margin margin="17px 22px 0 22px">
              <Box variant="guide">
                <Flex jc="space-between">
                  <Text variant="comment">{comment?.communityCommentContent}</Text>
                  <Text variant="comment-date">
                    {comment?.communityCommentCreatedAt}
                  </Text>
                </Flex>
              </Box>
            </Margin>
            <Margin margin="10px 20px 0 22px">
              <Box variant="board-minibutton">
                <Flex gap="10px" jc="space-between">
                  <Text
                    variant="comment-title"
                    onClick={() => {
                      navigate(`/community/${comment?.communityId}`);
                    }}
                  >
                    {comment?.communityTitle}
                  </Text>
                  <Box>
                    <Button
                      variant="mypage"
                      onClick={() => {
                        setEdit(!edit);
                      }}
                    >
                      수정
                      <Image variant="profile-edit" src={Edit} />
                    </Button>
                    <Button variant="mypage" onClick={onDeleteComment}>
                      삭제
                      <Image variant="profile-edit" src={Delete} />
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Margin>
          </Box>
        </Margin>
      </Box>
    )}
  </Box>
  )
}

export default ComuComment

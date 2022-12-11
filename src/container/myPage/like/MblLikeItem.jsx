import { Box, Image, Text, Margin, Flex } from "../../../components";

const MblLikeItem = ({like,navigate}) => {
  return (
    <Margin margin="12px auto">
    <Box
        size="container-s"
        style={{ borderBottom: "1px solid #D9D9D9" }}
        key={like.boardId}
        onClick={() => {
            navigate(`/detail/post/${like?.boardId}`);
        }}
    >
        <Flex jc="space-between">
            <Box
                size="container-m"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    size="m"
                    style={{ fontWeight: "700" }}
                    onClick={() => {
                        navigate(`/detail/post/${like?.boardId}`);
                    }}
                >
                    {like?.boardTitle}
                </Text>
                <Margin margin="6px 0 13px 0">
                    <Text
                        size="s-board"
                        onClick={() => {
                            navigate(`/detail/post/${like?.boardId}`);
                        }}
                    >
                        {like.boardContent}
                    </Text>
                </Margin>
                <Margin margin="6px 0 0 0">
                    <Flex gap="2px" jc="space-between">
                        <Text size="s">{like.boardCreatedAt}</Text>									
                    </Flex>
                </Margin>
            </Box>
            <Box>
                <Flex style={{ position: "relative" }}>
                    <Image
                        size="s"
                        src={like?.imageList[0]?.imageUrl}
                        alt={like?.boardTitle}
                    />
                </Flex>
            </Box>
        </Flex>
    </Box>
</Margin>

  )
}

export default MblLikeItem

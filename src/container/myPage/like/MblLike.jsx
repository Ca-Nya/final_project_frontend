import React from 'react'
import {
	Box,
	Image,
	Text,
	Margin,
	Flex,
	Strong,
	Button,
} from "../../../components";
import { MblLikeItem } from "../like";

const MblLike = ({data,navigate}) => {
  return (
    <Box>  
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
                <Button size="l" onClick={() => navigate(-1)}>
                    돌아가기
                </Button>
            </Flex>
        </Box>
    )}
</Box>
  )
}

export default MblLike

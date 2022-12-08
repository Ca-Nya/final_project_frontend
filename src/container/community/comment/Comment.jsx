import { Box, Image, Margin, Text } from "../../../components";


const Comment = ({item}) => {
  return (
    <div>
      <Text>{item.memberNickname}</Text>
			<Text>{item.communityCommentContent}</Text>
			<Image src={item.memberProfileImage} />
			<Text>{item.date}</Text>
    </div>
  )
}

export default Comment

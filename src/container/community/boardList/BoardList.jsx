import {
	Input,
	Button,
	Form,
	Text,
	Margin,
	Flex,
	Box,
} from "../../../components";

const BoardList = ({navigate, data}) => {
  console.log("BoardList==>",data)
  return(
    <Box>
      {data.map(item => {
        return(
          <Box key={item.communityId}>
            <Text
            onClick={()=>{
              navigate(`/community/${item.communityId}`)
            }}
            >{item.communityTitle}</Text>
          </Box>
        )
      })}
    </Box>
  )
}

export default BoardList

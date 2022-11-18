import MyComment from "./MyComment";
import MYBoard from "./MyBoard";
import MyLike from "./MyLike";
import { Box, Input, Button, Form } from "../../common";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
	const navigate = useNavigate();
	return (
		<Box>
			<span
			onClick={()=>{
				navigate('/myboard')
			}}
			>내가쓴글/ </span>
			<span
			onClick={()=>{
				navigate('/mylike')
			}}
			>좋아요/ </span>
			<span
			onClick={()=>{
				navigate('/mycomment')
			}}
			>작성댓글/ </span>
		</Box>
	);
};

export default MyPage;

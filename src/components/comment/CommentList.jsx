import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Input, Button, Form } from "../../common";
import CommentEdit from "./CommentEdit";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentList = () => {
	//댓글 리스트 get요청 react-query
	const { data, status } = useQuery(["getComments"], async () => {
		const response = await axios.get(`${BASE_URL}/get/comments`);
		return response.data;
	});
	console.log("CommentList=>", data);
	if (status === "error") {
		return <div>error입니다.</div>;
	}

	return (
		<Box>
			{data?.map(item => {
				return <CommentEdit key={item.commentId} item={item} />;
			})}
		</Box>
	);
};

export default CommentList;

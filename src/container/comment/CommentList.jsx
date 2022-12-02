import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
	Box,
	DataList,
	DataTerm,
	DataDesc,
	Flex,
	Margin,
} from "../../components";
import CommentEdit from "./CommentEdit";

const BASE_URL = process.env.REACT_APP_SERVER;

const CommentList = () => {
	const { id } = useParams();
	//댓글 리스트 get요청 react-query
	const { data, status } = useQuery(["getComments"], async () => {
		const response = await axios.get(`${BASE_URL}/get/${id}/comments`);
		return response.data;
	});
	console.log("CommentList ===============>", data);
	if (status === "error") {
		return <div>error입니다.</div>;
	}

	return (
		<Box>
			<Margin margin="0 0 30px 0">
				<DataList variant="comment-count">
					<Flex gap="3px">
						<DataTerm>댓글</DataTerm>
						<DataDesc>{data?.length}</DataDesc>
					</Flex>
				</DataList>
			</Margin>
			{data?.map(item => {
				return <CommentEdit key={item.commentId} item={item} />;
			})}
		</Box>
	);
};

export default CommentList;

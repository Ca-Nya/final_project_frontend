import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import ComuCommentEdit from "./ComuCommentEdit";
import {
	Box,
	DataList,
	DataTerm,
	DataDesc,
	Flex,
	Margin,
} from "../../components";

const ComuCommentList = () => {
	const BASE_URL = process.env.REACT_APP_SERVER;
	const { id } = useParams();
	//댓글 리스트 get요청 react-query
	const { data, status } = useQuery(["getComuComments"], async () => {
		const response = await axios.get(`${BASE_URL}/get/${id}/communityComments`);
		return response.data;
	});
	console.log("CommentComuList ===============>", data);
	if (status === "error") {
		return <div>error입니다.</div>;
	}

	return (
		<div>
			<p>댓글</p>
			<p>{data?.length}</p>
			{data?.map(item => {
				return <ComuCommentEdit key={item?.communityCommentId} item={item} />;
			})}
		</div>
	);
};

export default ComuCommentList;

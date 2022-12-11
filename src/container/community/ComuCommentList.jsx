import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Default, Mobile } from "../../assets/mediaQuery";
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

	if (status === "error") {
		return <div>error입니다.</div>;
	}

	return (
		<>
			<Default>
				<Box variant="container">
					<Margin margin="0 0 30px 0">
						<DataList variant="comment-count">
							<Flex gap="3px">
								<DataTerm>댓글</DataTerm>
								<DataDesc>{data?.length}</DataDesc>
							</Flex>
						</DataList>
					</Margin>
				</Box>
				{data?.map(item => {
					return (
						<Box variant="container">
							<ComuCommentEdit key={item?.communityCommentId} item={item} />
						</Box>
					);
				})}
			</Default>
			<Mobile>
				{data?.map(item => {
					return (
						<Box variant="container">
							<ComuCommentEdit key={item?.communityCommentId} item={item} />
						</Box>
					);
				})}
			</Mobile>
		</>
	);
};

export default ComuCommentList;

import {
	DataList,
	DataDesc,
	DataTerm,
	Margin,
	Flex,
	Box,
	Button,
} from "../../../components";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

const Like = ({ detailPostData, handleLike, isLike }) => {
	return (
		<Margin margin="40px 0 0 0">
			<Flex jc="flex-end">
				<DataList variant="detail-heart-count">
					<Flex ai="center" gap="5px">
						<DataTerm>좋아요</DataTerm>
						<DataDesc>{detailPostData.heartCount}</DataDesc>
						<Box>
							<Box variant="detail-heart">
								<Button onClick={handleLike}>
									<FaHeart className={isLike ? "liked" : ""} size="33" />
								</Button>
							</Box>
						</Box>
					</Flex>
				</DataList>
			</Flex>
		</Margin>
	);
};

export default Like;

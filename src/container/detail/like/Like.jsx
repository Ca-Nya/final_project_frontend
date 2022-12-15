import {
	Box,
	Button,
	Flex,
	DataList,
	DataTerm,
	DataDesc,
	Hidden,
} from "../../../components";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

const Like = ({ handleLike, isLike, detailPostData }) => {
	return (
		<Box>
			<Flex jc="flex-end">
				<DataList variant="detail-heart-count">
					<Flex ai="center" gap="5px">
						<Box>
							<Box variant="detail-heart">
								<Button onClick={handleLike}>
									<FaHeart className={isLike ? "liked" : ""} size="35" />
								</Button>
							</Box>
						</Box>
						<Hidden>
							<DataTerm>좋아요</DataTerm>
						</Hidden>
						<DataDesc>{detailPostData.heartCount}</DataDesc>
					</Flex>
				</DataList>
			</Flex>
		</Box>
	);
};

export default Like;

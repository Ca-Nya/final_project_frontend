import {
	Box,
	ThirdHeading,
	SecondHeading,
	Flex,
	Margin,
	DataList,
	DataTerm,
	DataDesc,
	Hidden,
} from "../../components";
import { useNavigate } from "react-router-dom";

const MainNewList = ({ newDto }) => {
	// React Router
	const navigate = useNavigate();

	return (
		<Margin margin="30px 0 0 0">
			<Flex gap="1.9%" ai="center" jc="center">
				{newDto.map(newPost => {
					return (
						<Box
							onClick={() => navigate(`/detail/post/${newPost.boardId}`)}
							variant="main-new-item"
							key={newPost.boardId}
						>
							<ThirdHeading variant="main-new-title">New</ThirdHeading>
							<Box bg={newPost.imageUrl} variant="main-new-item-image" />
							<Margin margin="25px 0 0 0">
								<Box variant="main-new-address">
									<SecondHeading
										variant="main-new-address"
										className="ellipsis-sm"
									>
										{newPost.address}
									</SecondHeading>
								</Box>
							</Margin>
							<Margin margin="14px 0 0 0">
								<DataList variant="main-new-hashtag">
									<Box>
										<Hidden>
											<DataTerm>높은 점수를 받은 카테고리</DataTerm>
										</Hidden>
										<Flex gap="5px" jc="center">
											<DataDesc>#커피맛집</DataDesc>
											<DataDesc>#디저트맛집</DataDesc>
										</Flex>
									</Box>
								</DataList>
							</Margin>
						</Box>
					);
				})}
			</Flex>
		</Margin>
	);
};

export default MainNewList;

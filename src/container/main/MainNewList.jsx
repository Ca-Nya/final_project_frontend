import {
	Box,
	FirstHeading,
	ThirdHeading,
	SecondHeading,
	Flex,
	Margin,
	DataList,
	DataTerm,
	DataDesc,
	Hidden,
	Button,
} from "../../components";
import { useNavigate } from "react-router-dom";

const MainNewList = ({ newDto }) => {
	// React Router
	const navigate = useNavigate();

	return (
		<>
			<Margin margin="100px 0 0 0">
				<Flex jc="space-between" ai="center">
					<FirstHeading variant="title">NEW๐ฅ</FirstHeading>
					<Button onClick={() => navigate("/overalls/์ต์ ")} variant="more">
						๋๋ณด๊ธฐ
					</Button>
				</Flex>
			</Margin>
			<Margin margin="30px 0 0 0">
				<Flex gap="2%" ai="center" jc="center">
					{newDto.map((newPost, idx) => {
						if (true) {
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
													<DataTerm>๋์ ์ ์๋ฅผ ๋ฐ์ ์นดํ๊ณ ๋ฆฌ</DataTerm>
												</Hidden>
												<Flex gap="5px" jc="center">
													{newPost.highestRatings.map((item, idx) => {
														return <DataDesc key={idx}>#{item}</DataDesc>;
													})}
												</Flex>
											</Box>
										</DataList>
									</Margin>
								</Box>
							);
						}
					})}
				</Flex>
			</Margin>
		</>
	);
};

export default MainNewList;

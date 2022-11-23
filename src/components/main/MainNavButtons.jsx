import { Nav, Button, Box, Flex, Image, Text } from "../../common";
import { useNavigate } from "react-router-dom";
import { hot, recent, all } from "../../assets/icons/overalls";
import {
	coffee,
	dessert,
	kindness,
	mood,
	parking,
	price,
	community,
} from "../../assets/icons/fields";

const MainNavButtons = () => {
	// React Router
	const navigate = useNavigate();
	//  최신, 인기, 전체 게시글
	const overalls = [
		["recent", "최신리뷰", recent],
		["hot", "인기리뷰", hot],
		["all", "전체리뷰", all],
	];
	//  별점별 게시글
	const fields = [
		["price", "가성비맛집", price],
		["mood", "분위기맛집", mood],
		["coffee", "커피맛집", coffee],
		["dessert", "디저트맛집", dessert],
		["kindness", "친절맛집", kindness],
		["parking", "주차맛집", parking],
	];

	return (
		<Nav variant="main-category-button-group-wrap">
			<Flex jc="center" ai="center">
				<Box variant="container">
					<Flex jc="center" ai="center" gap="27px">
						{overalls.map(category => {
							return (
								<Button
									variant="main-cateory"
									category={category[0]}
									onClick={() => {
										navigate(`/overalls/${category[0]}`);
									}}
								>
									<>
										<Image src={category[2]} variant="main-cateory" />
										<Text>{category[1]}</Text>
									</>
								</Button>
							);
						})}
						{fields.map(category => {
							return (
								<Button
									variant="main-cateory"
									onClick={() => {
										navigate(`/fields/${category[0]}`);
									}}
								>
									<>
										<Image src={category[2]} variant="main-cateory" />
										<Text>{category[1]}</Text>
									</>
								</Button>
							);
						})}
						<Button
							variant="main-cateory"
							onClick={() => {
								navigate(`/`);
							}}
						>
							<>
								<Image src={community} variant="main-cateory" />
								<Text>커뮤니티</Text>
							</>
						</Button>
					</Flex>
				</Box>
			</Flex>
		</Nav>
	);
};

export default MainNavButtons;

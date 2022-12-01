import { Nav, Button, Box, Flex, Image, Text, Margin } from "../../components";
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
		["가성비", "가성비맛집", price],
		["분위기", "분위기맛집", mood],
		["커피", "커피맛집", coffee],
		["디저트", "디저트맛집", dessert],
		["친절", "친절맛집", kindness],
		["주차", "주차맛집", parking],
	];
	//
	// const fields = [
	// 	["price", "가성비맛집", price],
	// 	["mood", "분위기맛집", mood],
	// 	["coffee", "커피맛집", coffee],
	// 	["dessert", "디저트맛집", dessert],
	// 	["kindness", "친절맛집", kindness],
	// 	["parking", "주차맛집", parking],
	// ];

	return (
		<Nav variant="main-category-button-group-wrap">
			<Flex jc="center" ai="center">
				<Box variant="container">
					<Flex jc="center" ai="center" gap="2.5%">
						{overalls.map(category => {
							return (
								<Button
									key={category[0]}
									variant="main-category"
									category={category[0]}
									onClick={() => {
										navigate(`/overalls/${category[0]}`);
									}}
								>
									<>
										<Image
											src={category[2]}
											alt={`${category[1]} 버튼`}
											variant="main-category"
										/>
										<Margin margin="7% 0 0 0">
											<Text variant="main-category">{category[1]}</Text>
										</Margin>
									</>
								</Button>
							);
						})}
						{fields.map(category => {
							return (
								<Button
									key={category[0]}
									variant="main-category"
									onClick={() => {
										navigate(`/fields/${category[0]}`);
									}}
								>
									<>
										<Image
											src={category[2]}
											alt={`${category[1]} 버튼`}
											variant="main-category"
										/>
										<Margin margin="7% 0 0 0">
											<Text variant="main-category">{category[1]}</Text>
										</Margin>
									</>
								</Button>
							);
						})}
						<Button
							variant="main-category"
							onClick={() => {
								navigate(`/`);
							}}
						>
							<>
								<Image
									src={community}
									alt="카테고리 버튼"
									variant="main-category"
								/>
								<Margin margin="7% 0 0 0">
									<Text variant="main-category">커뮤니티</Text>
								</Margin>
							</>
						</Button>
					</Flex>
				</Box>
			</Flex>
		</Nav>
	);
};

export default MainNavButtons;

import {
	Footer,
	Box,
	Flex,
	Margin,
	UnOrderedList,
	ListItem,
	Text,
	SecondHeading,
} from "../../components";

const MainFooter = () => {
	return (
		<Footer variant="main-footer">
			<Box variant="container">
				<Box variant="main-footer-wrap">
					<Flex jc="space-between">
						<Box variant="main-footer-address">
							<Margin margin="0 0 10px 0">
								<SecondHeading variant="main-footer">CA NYA</SecondHeading>
							</Margin>
							<Text variant="main-footer">카페리뷰의 성지, 카냐</Text>
							<Margin margin="65px 0 0 0">
								<UnOrderedList>
									<Flex>
										<ListItem variant="main-footer">
											<a
												href="https://github.com/Ca-Nya/final_project_frontend"
												target="_blank"
												rel="noreferrer"
											>
												Frontend
											</a>
										</ListItem>
										<ListItem variant="main-footer">|</ListItem>
										<ListItem variant="main-footer">
											<a
												href="https://github.com/Ca-Nya/Ca-Nya-final_project_CaNya_Backend"
												target="_blank"
												rel="noreferrer"
											>
												Backend
											</a>
										</ListItem>
									</Flex>
								</UnOrderedList>
							</Margin>
							<Text variant="main-footer-copy">
								Coffeeright 2022. kinggod4jo. All Rights Reserved.
							</Text>
						</Box>
						<Margin margin="45px 0 0 0">
							<Box variant="main-footer-info">
								<Flex fd="column" gap="10px" jc="center">
									<Text variant="main-footer-info">상호 : CA NYA</Text>
									<Text variant="main-footer-info">
										팀원 : 박성민, 서지영, 임소희, 장지윤, 김병기
									</Text>
									<Text variant="main-footer-info">
										email : jen.jyseo@gmail.com
									</Text>
									<Text variant="main-footer-info">전화: 1522-8016</Text>
									<Text variant="main-footer-info">
										주소 : 주소: 서울특별시 강남구 테헤란로44길 8 12층
									</Text>
								</Flex>
							</Box>
						</Margin>
					</Flex>
				</Box>
			</Box>
		</Footer>
	);
};

export default MainFooter;

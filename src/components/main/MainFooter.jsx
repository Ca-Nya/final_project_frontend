import {
	Footer,
	Box,
	Flex,
	Margin,
	UnOrderedList,
	ListItem,
	Text,
	SecondHeading,
	ThirdHeading,
} from "../../common";

const MainFooter = () => {
	return (
		<Footer variant="main-footer">
			<Box variant="container">
				<Box variant="main-footer-wrap">
					<Flex jc="space-between">
						<Box variant="main-footer-address">
							<Margin margin="0 0 10px 0">
								<SecondHeading variant="main-footer">Github</SecondHeading>
							</Margin>
							<UnOrderedList>
								<Flex>
									<ListItem variant="main-footer">
										<a
											href="https://cocoder.tistory.com"
											target="_blank"
											rel="noreferrer"
										>
											Frontend
										</a>
									</ListItem>
									<ListItem variant="main-footer">|</ListItem>
									<ListItem variant="main-footer">
										<a
											href="https://github.com/cocoder16"
											target="_blank"
											rel="noreferrer"
										>
											Backend
										</a>
									</ListItem>
								</Flex>
							</UnOrderedList>
							<Margin margin="90px 0 0 0">
								<Text variant="main-footer-copy">
									Copyright 2022. kinggod4jo. All Rights Reserved.
								</Text>
							</Margin>
						</Box>
						<Box variant="main-footer-info">
							<Flex fd="column" gap="10px" jc="center">
								<ThirdHeading
									variant="main-footer-info"
									aria-label="카냐 로고"
								/>
								<Text variant="main-footer-info">상호 : 카냐짱</Text>
								<Text variant="main-footer-info">대표 : 박성민</Text>
								<Text variant="main-footer-info">email : 123@naver.com</Text>
								<Text variant="main-footer-info">전화: 1522-8016</Text>
								<Text variant="main-footer-info">
									주소 : 주소: 서울특별시 강남구 테헤란로44길 8 12층
								</Text>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Footer>
	);
};

export default MainFooter;

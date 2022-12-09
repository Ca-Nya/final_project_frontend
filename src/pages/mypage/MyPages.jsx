import { MainNav, MainFooter } from "../../container/main";
import { MyPage } from "../../container/myPage";
import { Box, Image, Margin } from "../../components";
import { Default, Mobile } from "../../assets/mediaQuery";
import myPageBackground from "../../assets/images/mypage-background.png";

const MyPages = () => {
	return (
		<Box>
			<Default>
				<Image variant="mypage" src={myPageBackground} />
				<Margin margin="3.8vw 0 26.5vw 0">
					<MyPage />
				</Margin>
			</Default>
			<Mobile>
				<MyPage />
			</Mobile>
		</Box>
	);
};

export default MyPages;

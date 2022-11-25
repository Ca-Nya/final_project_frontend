import { MainNav, MainFooter } from "../../components/main";
import { MyPage } from "../../components/my_page";
import { Box, Image, Margin } from "../../common";
import myPageBackground from "../../assets/images/mypage-background.png";
import { Outlet } from "react-router-dom";

const MyPages = () => {
	return (
		<Box>
			<MainNav />
			<Image variant="mypage" src={myPageBackground} />
			<Margin margin="43px 0 300px 0">
				<Box variant="container">
					<MyPage>
						<Outlet />
					</MyPage>
				</Box>
			</Margin>
			<MainFooter />
		</Box>
	);
};

export default MyPages;

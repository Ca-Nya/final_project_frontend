import { MainNav } from "../../components/main";
import { MyPage } from "../../components/my_page";
import { Box, Image, Margin } from "../../common";
import myPageBackground from "../../assets/images/mypage-background.png";
import { Outlet } from "react-router-dom";

const MyPages = () => {
	return (
		<Box>
			<MainNav />
			<Image variant="mypage" src={myPageBackground} />
			<Margin margin="43px 0 0 0">
				<Box variant="container">
					<MyPage>
						<Outlet />
					</MyPage>
				</Box>
			</Margin>
		</Box>
	);
};

export default MyPages;

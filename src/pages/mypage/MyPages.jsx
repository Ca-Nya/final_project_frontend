import { MainNav } from "../../components/main";
import { MyPage } from "../../components/my_page";
import { Box, Image } from "../../common";
import myPageBackground from "../../assets/images/mypage-background.png"

const MyPages = () => {
	return (
		<Box>			
			<MainNav />
			<Image variant="mypage" src ={myPageBackground} />
			<Box variant="container">
				<MyPage />
			</Box>
		</Box>
	);
};

export default MyPages;

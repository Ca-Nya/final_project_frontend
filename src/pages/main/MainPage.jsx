import { Box, Main } from "../../common";
import { MainCarousel, MainList, MainNavButtons } from "../../components/main";

function MainPage() {
	return (
		<Main>
			<MainCarousel />
			<MainNavButtons />
			<Box variant="container">
				<MainList />
			</Box>
		</Main>
	);
}

export default MainPage;

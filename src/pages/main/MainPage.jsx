import { Box, Main } from "../../components";
import { MainCarousel, MainList, MainNavButtons } from "../../container/main";

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

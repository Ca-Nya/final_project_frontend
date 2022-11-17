import * as styles from "./MainLayout.styles";
import { MainList, MainNav } from "../../components/main";

const MainLayout = () => {
	return (
		<styles.MainLayout>
			<MainNav />
			<MainList />
		</styles.MainLayout>
	);
};

export default MainLayout;

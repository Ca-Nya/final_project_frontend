import * as styles from "./MainListPage.styles";
import { MainList, MainNav } from "../../components/mainlist";

function MainListPage() {
  return (
    <styles.MainListPage>
      <MainNav />
      <MainList />
    </styles.MainListPage>
  );
}

export default MainListPage;

import * as styles from "./MainLayout.styles";
import MainList from "../../components/mainlist/MainList";
import MainNav from "../../components/mainlist/MainNav";

const MainLayout = () => {
  return (
<styles.MainLayout>
    <MainNav />
    <MainList />
</styles.MainLayout>
  )
}

export default MainLayout


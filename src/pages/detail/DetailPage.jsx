import { Main } from "../../common";
import { Outlet } from "react-router-dom";

const DetailPage = () => {
	return (
		<Main>
			<Outlet></Outlet>
		</Main>
	);
};

export default DetailPage;

import { Outlet } from "react-router-dom";
import MyPages from "../../pages/mypage/MyPages";

const MyPageLayout = () => {
	return (
		<MyPages>
			<Outlet />
		</MyPages>
	);
};

export default MyPageLayout;

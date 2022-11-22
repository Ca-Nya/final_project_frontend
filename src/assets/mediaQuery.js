import { useMediaQuery } from "react-responsive";

export const Default = ({ children }) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });

	return isNotMobile ? children : null;
};

export const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return isMobile ? children : null;
};

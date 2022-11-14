import * as styles from "./Nav.styles";

const Nav = ({ children, ...props }) => {
	return <styles.Nav {...props}>{children}</styles.Nav>;
};

export default Nav;

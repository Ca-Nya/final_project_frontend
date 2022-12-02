import * as styles from "./Hidden.styles";

const Hidden = ({ children, ...props }) => {
	return <styles.Hidden {...props}>{children}</styles.Hidden>;
};

export default Hidden;

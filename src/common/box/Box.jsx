import * as styles from "./Box.styles";

const Box = ({ children, ...props }) => {
	return <styles.Box {...props}>{children}</styles.Box>;
};

export default Box;

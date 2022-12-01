import * as styles from "./Strong.styles";

const Strong = ({ children, ...props }) => {
	return <styles.Strong {...props}>{children}</styles.Strong>;
};

export default Strong;

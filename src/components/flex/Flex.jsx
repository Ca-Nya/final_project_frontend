import * as styles from "./Flex.styles";

const Flex = ({ children, ...props }) => {
	return <styles.Flex {...props}>{children}</styles.Flex>;
};

export default Flex;

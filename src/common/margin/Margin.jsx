import * as styles from "./Margin.styles";

const Margin = ({ children, ...props }) => {
	return <styles.Margin {...props}>{children}</styles.Margin>;
};

export default Margin;

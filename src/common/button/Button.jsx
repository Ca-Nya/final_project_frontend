import * as styles from "./Button.styles";

const Button = ({ children, ...props }) => {
	return <styles.Button {...props}>{children}</styles.Button>;
};

export default Button;

import * as styles from "./Form.styles";

const Form = ({ children, ...props }) => {
	return <styles.Form {...props}>{children}</styles.Form>;
};

export default Form;

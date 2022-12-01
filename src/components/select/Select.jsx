import * as styles from "./Select.styles";

export const Select = ({ children, ...props }) => {
	return <styles.Select {...props}>{children}</styles.Select>;
};

export const Option = ({ children, ...props }) => {
	return <styles.Option {...props}>{children}</styles.Option>;
};

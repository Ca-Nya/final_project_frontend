import * as styles from "./Label.style";

export const Label = ({ children, ...props }) => {
	return <styles.Label {...props}>{children}</styles.Label>;
};
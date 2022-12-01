import * as styles from "./TextArea.styles";

const TextArea = ({ children, ...props }) => {
	return <styles.TextArea {...props}>{children}</styles.TextArea>;
};

export default TextArea;

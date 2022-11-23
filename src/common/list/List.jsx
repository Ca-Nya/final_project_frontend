import * as styles from "./List.styles";

export const ListItem = ({ children, ...props }) => {
	return <styles.ListItem {...props}>{children}</styles.ListItem>;
};

export const UnOrderedList = ({ children, ...props }) => {
	return <styles.UnOrderedList {...props}>{children}</styles.UnOrderedList>;
};

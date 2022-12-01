import * as styles from "./Description.styles";

export const DataList = ({ children, ...props }) => {
	return <styles.DataList {...props}>{children}</styles.DataList>;
};

export const DataDesc = ({ children, ...props }) => {
	return <styles.DataDesc {...props}>{children}</styles.DataDesc>;
};

export const DataTerm = ({ children, ...props }) => {
	return <styles.DataTerm {...props}>{children}</styles.DataTerm>;
};

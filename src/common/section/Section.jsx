import * as styles from "./Section.styles";

export const Header = ({ children, ...props }) => {
	return <styles.Header {...props}>{children}</styles.Header>;
};

export const Main = ({ children, ...props }) => {
	return <styles.Main {...props}>{children}</styles.Main>;
};

export const Footer = ({ children, ...props }) => {
	return <styles.Footer {...props}>{children}</styles.Footer>;
};

export const Section = ({ children, ...props }) => {
	return <styles.Section {...props}>{children}</styles.Section>;
};

export const Article = ({ children, ...props }) => {
	return <styles.Article {...props}>{children}</styles.Article>;
};

export const Nav = ({ children, ...props }) => {
	return <styles.Nav {...props}>{children}</styles.Nav>;
};

export const Aside = ({ children, ...props }) => {
	return <styles.Aside {...props}>{children}</styles.Aside>;
};

export const calcRem = size => `${size / 16}rem`;

const fontSizes = {
	small: calcRem(10),
	base: calcRem(15),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(25),
	xxxl: calcRem(30),
	titleSize: calcRem(40),
};

const paddings = {
	small: calcRem(8),
	base: calcRem(10),
	lg: calcRem(12),
	xl: calcRem(14),
	xxl: calcRem(16),
	xxxl: calcRem(18),
};

const margins = {
	small: calcRem(8),
	base: calcRem(10),
	lg: calcRem(12),
	xl: calcRem(14),
	xxl: calcRem(16),
	xxxl: calcRem(18),
};

const interval = {
	base: calcRem(50),
	lg: calcRem(100),
	xl: calcRem(150),
	xxl: calcRem(200),
};

const verticalInterval = {
	base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const colors = {
	point: "#f2594b",
	main: "#fdf773",
	main_purple: "#9f90f9",
	black: "#333333",
	white: "#FFFFFF",
	dark_gray: "#555555",
	gray: "#999999",
	light_gray: "#eaeaea",
	line: "#d9d9d9",
};

const device = {
	mobile: `@media screen and (max-width: 767px)`,
};

const theme = {
	fontSizes,
	colors,
	device,
	paddings,
	margins,
	interval,
	verticalInterval,
};

export default theme;

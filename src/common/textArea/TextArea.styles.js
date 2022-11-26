import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const TextArea = styled.textarea`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	height: ${({ height }) => (height ? height : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "")};
	font-weight: ${({ fontWeigth }) => (fontWeigth ? fontWeigth : "")};

	${({ variant }) => {
		switch (variant) {
			case "cafe-review-desc":
				return css`
					display: block;
					width: 100%;
					height: ${calcRem(310)};
					font-size: ${({ theme }) => theme.fontSizes.xl};
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					padding: 25px 30px;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
					::placeholder {
						font-size: ${({ theme }) => theme.fontSizes.xl};
					}
					&:focus {
						border: 1px solid ${({ theme }) => theme.colors.main_purple};
					}
				`;
			default:
				break;
		}
	}}
`;

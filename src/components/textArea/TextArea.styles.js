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
			/* 리뷰 작성 페이지 */
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
			/* 상세 페이지 댓글 */
			case "comment":
				return css`
					display: block;
					width: 100%;
					height: ${calcRem(80)};
					border-radius: 5px;
					padding: 10px 0;
					::placeholder {
						font-size: ${({ theme }) => theme.fontSizes.base};
					}
				`;
			/* 상세 페이지 */
			case "comment-edit-input":
				return css`
					display: block;
					width: 550px;
					height: ${calcRem(41)};
					padding: 10px 0px;
					color: ${({ theme }) => theme.colors.dark_gray};
				`;
			default:
				break;
		}
	}}

	/* 모바일 사이즈 */
	${({ size }) => {
		switch (size) {
			case "l":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(156)};
					border-radius: 5px;
					border: 1px solid ${({ theme }) => theme.colors.line};
					font-size: ${({ theme }) => theme.fontSizes.medium};
					&:placeholder {
						font-size: ${({ theme }) => theme.fontSizes.medium};
					}
					padding: 12px 12px 12px 20px;
				`;
			case "m":
				return css`
					width: ${calcRem(230)};
					height: ${calcRem(40)};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.medium};
					&:placeholder {
						font-size: ${({ theme }) => theme.fontSizes.medium};
					}
					padding: -10px 12px 12px 20px;
				`;
			
			default:
				break;
		}
	}}
`;

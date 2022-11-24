import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Text = styled.p`
	display: ${({ dp }) => (dp ? dp : "")};
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};

	${({ variant }) => {
		switch (variant) {
			/* 로그인 / 회원가입 페이지 */
			case "join":
				return css`
					display: flex;
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
					font-weight: 700;
				`;
			case "join-id":
				return css`
					display: flex;
					width: 557px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					text-align: left;
				`;
			case "join-pw":
				return css`
					display: flex;
					width: 557px;
					margin: 16px 0 8px 110px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					text-align: left;
				`;
			case "join-info":
				return css`
					display: flex;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					text-align: left;
				`;
			case "join-signup":
				return css`
					display: flex;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					color: ${({ theme }) => theme.colors.black};
					text-align: left;
					text-decoration: underline;
					text-decoration-thickness: 2px;
					text-decoration-line: underline;
					text-decoration-color: ${({ theme }) => theme.colors.black};
					font-weight: 700;
					&: hover {
						cursor: pointer;
					}
				`;
			case "join-warning":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.point};
				`;
			case "join-available":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.main_purple};
				`;
			case "level":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.white};
				`;
			case "profile-base":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.black};
				`;
			/* 메인 페이지 */
			case "main-category":
				return css`
					height: ${calcRem(19)};
				`;
			case "main-footer-info":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
				`;
			case "main-canya-pick-content":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
				`;
			/*  */
			case "button":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${props =>
						props.isActive
							? props.theme.colors.black
							: props.theme.colors.line};
					font-weight: ${props => (props.isActive ? 700 : 400)};
					&:hover {
						cursor: pointer;
						color: ${({ theme }) => theme.colors.dark_gray};
					}
				`;
			case "button-count":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${props =>
						props.isActive
							? props.theme.colors.black
							: props.theme.colors.line};
					font-weight: ${props => (props.isActive ? 700 : 400)};
				`;
			case "add":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.main_purple};
					&:hover {
						cursor: pointer;
						transform: scale(0.9, 0.9);
					}
				`;
			case "title":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.xxl};
					color: ${({ theme }) => theme.colors.black};
					font-weight: 700;
				`;
			case "comment":
				return css`
					font-size: ${calcRem(22)};
					color: ${({ theme }) => theme.colors.dark_gray};
					font-weight: 400;
				`;
			case "comment-title":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.black};
					font-weight: 700;
				`;
			case "comment-date":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.gray};
					font-weight: 400;
				`;
			default:
				break;
		}
	}}
`;

import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import search from "../../assets/icons/search.png";

export const Button = styled.button`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						width: ${calcRem(472)};
						height: 60px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						font-size: ${({ theme }) => theme.fontSizes.xl};
						font-weight: 700;
						margin-top: 92px;
					`;
				/* 메인페이지 */
				case "main-login":
					return css`
						width: 100%;
						max-width: ${calcRem(99)};
						height: 38px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 50px;
						font-size: ${({ theme }) => theme.fontSizes.base};
						border: 1px solid ${({ theme }) => theme.colors.line};
					`;
				case "main-search":
					return css`
						position: absolute;
						top: 11px;
						right: 42px;
						width: ${calcRem(21)};
						height: ${calcRem(21)};
						background-color: ${({ theme }) => theme.colors.white};
						background-image: url(${search});
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
					`;
				default:
					break;
			}
		}}
	}
`;

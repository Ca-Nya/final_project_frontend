import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import signInBackground from "../../assets/images/signin-background.png";
import signUpBackground from "../../assets/images/signup-background.png";

export const Header = styled.header``;

export const Main = styled.main``;

export const Footer = styled.footer``;

export const Section = styled.section`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 로그인 페이지 */
				case "sign-in":
					return css`
						width: 100%;
						height: 100vh;
						display: flex;
						position: relative;
						background-image: url(${signInBackground});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
					`;
					case "sign-up":
					return css`
						width: 100%;
						height: 100vh;
						display: flex;
						position: relative;
						background-image: url(${signUpBackground});
						background-repeat: no-repeat;
						background-size: 948px;
						background-position: left;
					`;
				default:
					break;
			}
		}}
	}
`;

export const Article = styled.article``;

export const Nav = styled.nav`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "main":
					return css`
						width: 100%;
						height: 100px;
						margin: 0 auto;
						background-color: ${({ theme }) => theme.colors.white};
						border: 1px solid ${({ theme }) => theme.colors.line};
					`;
				/* 메인 페이지 */
				case "sign-in":
					return css`
						width: 100%;
						height: 100vh;
						background-image: url(${signInBackground});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
					`;
				default:
					break;
			}
		}}
	}
`;

export const Aside = styled.aside``;

import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import signInBackground from "../../assets/images/signin-background.png";
import signUpBackground from "../../assets/images/signup-background.png";

export const Header = styled.header``;

export const Main = styled.main``;

export const Footer = styled.footer`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-footer":
					return css`
						width: 100%;
						height: 350px;
						background-color: ${({ theme }) => theme.colors.dark_gray};
						color: ${({ theme }) => theme.colors.white};
					`;
				default:
					break;
			}
		}}
	}
`;

export const Section = styled.section`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 로그인 페이지 */
				case "sign-in":
					return css`
						width: 100vw;
						height: 100vh;
						display: flex;
						position: relative;
						background-image: url(${signInBackground});
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
						overflow: hidden;
					`;
				case "sign-up":
					return css`
						width: 100vw;
						height: 100vh;
						display: flex;
						position: relative;
						background-image: url(${signUpBackground});
						background-repeat: no-repeat;
						background-size: 50vw 100vh;
						background-position: left;
						overflow: hidden;
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
						position: fixed;
						top: 0;
						width: 100%;
						height: 100px;
						margin: 0 auto;
						background-color: ${({ theme }) => theme.colors.white};
						z-index: 6;
					`;
				/* 메인 페이지 */
				case "main-category-button-group-wrap":
					return css`
						width: 100%;
						height: 300px;
						background-color: #f8f8f8;
					`;

				/* 로그인 / 회원가입 페이지 */
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

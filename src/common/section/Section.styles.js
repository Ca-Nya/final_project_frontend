import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import signInBackground from "../../assets/images/signin-background.png";

export const Header = styled.header``;

export const Main = styled.main``;

export const Footer = styled.footer``;

export const Section = styled.section`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				/* 로그인 페이지 */
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
						height: 114px;
						margin: 0 auto;
						background-color: #d5d5d5;
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

import styled, { css } from "styled-components";
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
				case "container":
					return css`
						max-width: 1136px !important;
						margin: 0 auto;
						background-color: antiquewhite;
					`;
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
				default:
					break;
			}
		}}
	}
`;

export const Article = styled.article``;

export const Nav = styled.nav``;

export const Aside = styled.aside``;

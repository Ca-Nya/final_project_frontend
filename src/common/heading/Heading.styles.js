import styled, { css } from "styled-components";
import mainNavLogo from "../../assets/icons/mainNavLogo.png";

export const FirstHeading = styled.h1`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-logo":
					return css`
						width: 100%;
						height: 100%;
						background-image: url(${mainNavLogo});
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

export const SecondHeading = styled.h2`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "":
					return css``;
				default:
					break;
			}
		}}
	}
`;

export const ThirdHeading = styled.h3`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "":
					return css``;
				default:
					break;
			}
		}}
	}
`;

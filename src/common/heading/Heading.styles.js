import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
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
						/* background-image: url(${mainNavLogo}); */
						font-weight: 800;
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
					`;
				case "main-list":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.titleSize};
						font-weight: 800;
						letter-spacing: ${calcRem(1)};
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
				case "main-footer":
					return css`
						font-weight: 700;
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
					`;
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
				case "main-footer-info":
					return css`
						width: 50px;
						height: 50px;
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
						background-image: url(${mainNavLogo});
					`;
				case "main-canya-pick-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						font-weight: 700;
						letter-spacing: 0.07rem;
					`;
				default:
					break;
			}
		}}
	}
`;

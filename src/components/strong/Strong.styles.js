import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Strong = styled.strong`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "warning":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.titleSize};
						color: ${({ theme }) => theme.colors.main_purple};
						font-weight: 600;
					`;
				/* 메인 페이지 */
				case "main-carousel-hot":
					return css`
						color: ${({ theme }) => theme.colors.white};
						font-weight: 600;
						font-size: 48px;
					`;
				case "main-carousel-rate":
					return css`
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 600;
						font-size: 48px;
					`;
				case "main-canya-pick-rank":
					return css`
						position: relative;
						top: -6px;
					`;
				case "main-canya-pick-address":
					return css`
						display: inline-block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						background-color: ${({ theme }) => theme.colors.main};
						font-weight: 700;
					`;
				case "cafe-write-address-info":
					return css`
						display: inline-block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: ${({ theme }) => theme.fontSizes.xl};
						background-color: ${({ theme }) => theme.colors.main};
						font-weight: 700;
					`;
				case "cafe-write-address":
					return css`
						display: inline-block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: ${({ theme }) => theme.fontSizes.xl};
						background-color: ${({ theme }) => theme.colors.main};
						font-weight: 700;
					`;
				default:
					break;
			}
		}}
	}
`;

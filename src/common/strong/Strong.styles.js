import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Strong = styled.strong`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-carousel":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.titleSize};
						color: ${({ theme }) => theme.colors.white};
					`;
				default:
					break;
			}
		}}
	}
`;

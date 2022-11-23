import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Select = styled.select`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-search":
					return css`
						width: 19%;
						max-width: ${calcRem(222)};
					`;
				default:
					break;
			}
		}}
	}
`;

export const Option = styled.option`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				default:
					break;
			}
		}}
	}
`;

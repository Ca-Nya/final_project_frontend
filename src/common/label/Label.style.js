import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Label = styled.label`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 마이 페이지 */
				case "main-select":
					return css`
					`;
				default:
					break;
			}
		}}
	}
`;
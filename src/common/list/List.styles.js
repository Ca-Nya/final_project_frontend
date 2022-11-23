import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const ListItem = styled.li`
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

export const UnOrderedList = styled.ul`
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

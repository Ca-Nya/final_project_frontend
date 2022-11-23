import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const ListItem = styled.li`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-select":
					return css`
						padding: 10px;
						&:last-child {
							padding: 10px 0 20px 0;
						}
					`;
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
				case "main-select":
					return css``;
				default:
					break;
			}
		}}
	}
`;

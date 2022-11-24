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
						width: 100%;
						padding: 12px;
						text-align: center;
						&:last-child {
							padding: 12px 12px 15px 12px;
						}
						&:hover {
							background-color: #f8f8f8;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "main-footer":
					return css`
						margin: 10px 10px 10px 0;
						font-size: ${({ theme }) => theme.fontSizes.xl};
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

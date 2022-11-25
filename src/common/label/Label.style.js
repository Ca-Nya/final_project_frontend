import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Label = styled.label`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 마이 페이지 */
				case "main-select":
					return css``;
				/* 글쓰기 페이지 */
				case "cafe-review-file-button":
					return css`
						display: block;
						width: 25%;
						max-width: ${calcRem(215)};
						height: ${calcRem(215)};
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						cursor: pointer;
					`;
				default:
					break;
			}
		}}
	}
`;

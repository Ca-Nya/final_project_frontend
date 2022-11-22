import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Input = styled.input`
	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					/* &::after {
						content: "소희님 아프지 마세요오ㅠㅠ";
						display: block;
					} */
					${({ purpose }) => {
						// return purpose === "sign-in"
						// 	? `background-color: aliceblue;
						//      border-radius: 10px;
						// `
						// 	: "";
					}};
					width: ${calcRem(472)};
					height: 60px;
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.lg};
				`;
			default:
				break;
		}
	}}
`;

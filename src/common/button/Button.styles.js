import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Button = styled.button`
	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					width: ${calcRem(472)};
					height: 60px;
					background-color: ${({ theme }) => theme.colors.main};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 700;
					margin-top: 92px;
				`;
			case "main-login":
				return css`
					width: 100%;
					max-width: ${calcRem(99)};
					height: 38px;
					background-color: ${({ theme }) => theme.colors.main};
					border-radius: 50px;
					font-size: ${({ theme }) => theme.fontSizes.base};
					border: 1px solid ${({ theme }) => theme.colors.line};
				`;
			default:
				break;
		}
	}}
`;

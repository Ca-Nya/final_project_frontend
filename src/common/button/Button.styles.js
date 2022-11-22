import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Button = styled.button`
	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					width: ${calcRem(472)};
					height: 60px;
                    background-color:${({ theme }) => theme.colors.main};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
                    font-weight: 700;
				`;
			default:
				break;
		}
	}}
`;

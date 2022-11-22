import styled, { css } from "styled-components";

export const Text = styled.p`
	display: ${({ dp }) => (dp ? dp : "")};
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};

	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					display: flex;
				    margin:99px 0 24px 0;
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
					font-weight: 700;

				`;
				
			default:
				break;
		}
	}}
`;

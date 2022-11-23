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
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
					font-weight: 700;
				`;
			case "join-id":
				return css`
					display: flex;
					width: 557px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					text-align: left;
				`;
			case "join-pw":
				return css`
					display: flex;
					width: 557px;
					margin: 16px 0 8px 110px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					text-align: left;
				`;
			case "join-info":
				return css`
					display: flex;
					/* margin: 20px 0 8px 50px; */
					font-size: ${({ theme }) => theme.fontSizes.lg};
					text-align: left;
				`;
			case "join-signup":
				return css`
					display: flex;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					color: ${({ theme }) => theme.colors.black};
					text-align: left;
					text-decoration: underline;
					text-decoration-thickness: 2px;
					text-decoration-line: underline;
					text-decoration-color: ${({ theme }) => theme.colors.black};
					font-weight: 700;
					&: hover {
						cursor: pointer;
					}
				`;
			case "join-warning":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.point};
				`;
				case "join-available":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.main_purple};
				`;
				case "level":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.white};
				`;
					case "profile-base":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					color: ${({ theme }) => theme.colors.black};
				`;
			default:
				break;
		}
	}}
`;

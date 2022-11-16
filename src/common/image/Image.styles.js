import styled, { css } from "styled-components";

export const Image = styled.img`
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	border-radius: ${({ bd }) => (bd ? bd : "")};

	${({ variant }) => {
		switch (variant) {
			case "detail-review-profile":
				return css`
					width: 50px;
					height: 50px;
					object-fit: contain;
					object-position: center;
				`;
			case "detail-review":
				return css`
					width: 300px;
					height: 300px;
					object-fit: cover;
					object-position: center;
				`;
			default:
				break;
		}
	}}
`;

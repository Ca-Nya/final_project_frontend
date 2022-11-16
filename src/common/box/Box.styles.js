import styled, { css } from "styled-components";

export const Box = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "cafe-review-rating-box":
				return css`
					margin: 0 auto;
					& svg {
						color: #c4c4c4;
						cursor: pointer;
					}
					:hover svg {
						color: #fdd237;
					}
					& svg:hover ~ svg {
						color: #c4c4c4;
					}
					.active {
						color: #fdd237;
					}
				`;
			case "detail-rating-box":
				return css`
					margin: 0 auto;
					& svg {
						color: #c4c4c4;
					}
					.active {
						color: #fdd237;
					}
				`;
			default:
				break;
		}
	}}
`;

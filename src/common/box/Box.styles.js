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
			case "detail-heart-count":
				return css`
					margin: 0 auto;
					& svg {
						color: #ff7777;
					}
				`;
			case "detail-heart":
				return css`
					margin: 0 auto;
					& svg {
						color: #c4c4c4;
					}
					.liked {
						color: #ff7777;
					}
				`;
			case "main-best-item":
				return css`
					width: 400px;
					height: 200px;
					background-image: url(${({ bg }) => bg});
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
				`;
			case "main-new-item":
				return css`
					width: 200px;
					height: 200px;
					border-radius: 50%;
					background-image: url(${({ bg }) => bg});
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
				`;
			case "main-all-item":
				return css`
					width: 300px;
					height: 200px;
					background-image: url(${({ bg }) => bg});
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
				`;
			default:
				break;
		}
	}}
`;

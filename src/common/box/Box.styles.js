import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Box = styled.div`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "container":
					return css`
						width: 1136px !important;
						margin: 0 auto;
						background-color: antiquewhite;
					`;
				/* 리뷰 작성 페이지 */
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
				/* 상세 페이지 */
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
				/* 메인 페이지 */
				case "nav-container":
					return css`
						width: 1136px !important;
						/* margin: 0 auto; */
						background-color: antiquewhite;
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
				case "main-logo":
					return css`
						width: 100px;
						height: 50px;
						background-color: yellow;
					`;
				case "main-search":
					return css`
						width: ${calcRem(967)};
						height: 51px;
						margin: 0 auto;
						background-color: pink;
					`;
				case "main-user-info":
					// 내용물 width 값에 따라 변환
					return css`
						width: ${calcRem(110)};
						background-color: tomato;
					`;
				/* 메인리스트, 카테고리별 리스트 */
				case "list-item":
					return css`
						width: 300px;
						height: 400px;
						background-color: blueviolet;
						margin: 10px;
					`;
				case "list-target":
					return css`
						width: 300px;
						height: 400px;
						background-color: pink;
						margin: 10px;
					`;
				/* 로그인 / 회원가입 페이지 */
				case "join-box":
					return css`
						width: 557px;
						height: 700px;
					`;
				default:
					break;
			}
		}}
	}
`;

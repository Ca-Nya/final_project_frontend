import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import { canya_rank } from "../../assets/icons/fields";

export const Box = styled.div`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "container":
					return css`
						width: 100%;
						max-width: ${calcRem(1136)} !important;
						margin: 0 auto;
						padding: 0 40px;
						/* background-color: #eceaeade; */
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
				// navigation bar
				case "main-nav-wraper":
					return css`
						width: 92%;
						max-width: ${calcRem(1400)};
						height: 100%;
						margin: 0 auto;
					`;
				case "nav-container":
					return css`
						width: 100%;
						max-width: 1136px !important;
						margin: 0 10px;
					`;
				case "main-logo":
					return css`
						width: 10%;
						max-width: ${calcRem(120)};
						height: 50px;
					`;
				case "main-user-info":
					return css`
						width: 10%;
						max-width: ${calcRem(130)};
					`;
				case "main-search":
					return css`
						position: relative;
						width: 100%;
						max-width: ${calcRem(967)};
						margin: 0 auto;
					`;
				case "main-search-wraper":
					return css`
						position: absolute;
						left: 10px;
						width: 19%;
						max-width: ${calcRem(222)};
					`;
				case "main-selcet-wraper":
					return css`
						position: relative;
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 20px;
						background-color: ${({ theme }) => theme.colors.white};
						overflow: hidden;
						z-index: 11;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
					`;
				case "main-selcet-preview-wraper":
					return css`
						padding: 14px 0 14px 0;
					`;
				case "select-icon-wraper":
					return css`
						position: absolute;
						padding: 10px 10px 10px 71%;
						top: 0;
						right: 0;
						& svg {
						}
					`;
				case "main-carousel":
					return css`
						width: 100vw;
						/* width: 100%; */
						height: 650px;
						z-index: 1;
					`;
				case "main-carousel-item":
					return css`
						background-image: url(${({ bg }) => bg});
						width: 100vw;
						/* max-width: ${calcRem(1924)}; */
						height: 650px;
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
						filter: brightness(90%);
					`;
				case "main-footer-wrap":
					return css`
						width: 100%;
						height: 100%;
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
						padding: 40px 0;
					`;
				case "main-footer-address":
					return css`
						padding: 40px 0;
					`;
				case "main-footer-info":
					return css`
						padding: 40px 0;
					`;
				case "main-canya-pick-item-wrap":
					return css`
						width: 32%;
						max-width: ${calcRem(363)};
						box-shadow: rgba(0, 0, 0, 0.19) 0px 1px 5px;
						position: relative;
						border-radius: 5px;
						overflow: hidden;
					`;
				case "main-canya-pick-rank":
					return css`
						width: ${calcRem(49)};
						height: ${calcRem(61)};
						position: absolute;
						left: 33px;
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						background-image: url(${canya_rank});
						font-weight: 600;
						text-align: center;
					`;
				case "main-cany-pick-content-wrap":
					return css`
						padding: 5% 8% 9% 8%;
					`;
				case "main-canya-pick-content":
					return css`
						height: ${calcRem(100)};
					`;
				// case "":
				// 	return css``;

				/* 메인리스트, 카테고리별 리스트 */
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
				case "join":
					return css`
						width: 557px;
						height: 700px;
						position: absolute;
						top: 163px;
						left: 1103px;
						background-color: ${({ theme }) => theme.colors.white};
						border-radius: 5px;
						align-items: center;
						/* margin: 163px 240px 217px 1103px;				 */
					`;
				case "join-info":
					return css`
						width: 557px;
						margin-bottom: 136px;
						display: flex;
					`;
				case "join-box":
					return css`
						width: 557px;
						height: 700px;
					`;
				/* 마이페이지 */
				case "pofile":
					return css`
						width: ${calcRem(245)};
						height: ${calcRem(472)};
						background-color: ${({ theme }) => theme.colors.white};
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
					`;
				case "level":
					return css`
						width: ${calcRem(50)};
						height: ${calcRem(25)};
						background-color: #f6cd3c;
						border-radius: 50px;
					`;
				case "mypage-nav":
					return css`
						width: ${calcRem(846)};
						height: ${calcRem(30)};
						background-color: ${({ theme }) => theme.colors.white};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding-bottom: 40px;
						padding-left: 10px;
					`;
				case "guide":
					return css`
						display: flex;
						justify-content: space-between;
					`;
					case "guide-point":
					return css`
					width: ${calcRem(30)};
						height: ${calcRem(18)};
						/* background-color: ${({ theme }) => theme.colors.main}; */
						border-radius: 5px;
						text-align: center;
						align-items: center;
						background-color: ${props =>
						props.isActive
							? props.theme.colors.main
							: props.theme.colors.light_gray};
					`;
					case "comment-box":
					return css`
						width: ${calcRem(846)};
						height: ${calcRem(105)};
						background-color: ${({ theme }) => theme.colors.white};
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
						
					`;
					case "board-box":
					return css`
						width: ${calcRem(846)};
						height: ${calcRem(198)};
						background-color: ${({ theme }) => theme.colors.white};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
						
					`;
				default:
					break;
			}
		}}
	}
`;

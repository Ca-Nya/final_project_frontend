import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import { canya_rank } from "../../assets/icons/fields";
import location from "../../assets/icons/location.png";

export const Box = styled.div`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "container":
					return css`
						width: 100vw;
						max-width: ${calcRem(1136)} !important;
						margin: 0 auto;
						padding: 0 3.5vw;
						/* background-color: #eceaeade; */
					`;
				case "container-2":
					return css`
						width: 100vw;
						max-width: ${calcRem(1136)} !important;
						margin: 0 auto;
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
						cursor: pointer;
						transition: transform 900ms;
						&:hover {
							transform: translateY(-0.6%);
						}
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
						height: ${calcRem(75)};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding: 0 0 14px 0;
					`;
				case "main-canya-pick-info":
					return css`
						height: ${calcRem(87)};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding: 10px 0 14px 0;
						&::before {
							content: "";
							background-image: url(${location});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: 6%;
							max-width: ${calcRem(19)};
							height: ${calcRem(23)};
							display: inline-block;
							position: relative;
							margin: 0 5px 0 0;
							top: 2px;
						}
					`;
				case "main-canya-pick-info-content":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
					`;
				case "main-canya-pick-heart-comment-info-wrap":
					return css`
						width: 100%;
					`;
				case "main-best-item-wraper":
					return css`
						width: 100%;
						overflow: hidden;
						border-radius: 5px;
						cursor: pointer;
					`;
				case "main-best-item":
					return css`
						width: 100%;
						max-width: ${calcRem(556)};
						height: ${calcRem(230)};
						padding: 30px;
						background-image: linear-gradient(
								rgba(0, 0, 0, 0.03),
								rgba(0, 0, 0, 0.4)
							),
							url(${({ bg }) => bg});
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
						transition: transform 900ms;
						&:hover {
							transform: translateY(-0.6%);
							background-image: linear-gradient(
									rgba(0, 0, 0, 0.1),
									rgba(0, 0, 0, 0.6)
								),
								url(${({ bg }) => bg});
							transform: scale(1.05);
							transition: transform 0.7s;
						}
					`;

				case "main-new-item":
					return css`
						width: 100%;
						max-width: ${calcRem(169)};
						height: ${calcRem(245)};
						position: relative;
					`;
				case "main-new-item-image":
					return css`
						width: 100%;
						max-width: ${calcRem(169)};
						height: ${calcRem(162)};
						border-radius: 50%;
						background-image: url(${({ bg }) => bg});
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
						transition: border 400ms;
						&:hover {
							border: 3px solid ${({ theme }) => theme.colors.point};
						}
					`;
				case "main-new-address":
					return css`
						width: 100%;
						/* width: 95%; */
						max-width: ${calcRem(169)};
						margin: 0 auto;
					`;
				case "main-all-item-wraper":
					return css`
						width: 100%;
						max-width: ${calcRem(266)};
						height: ${calcRem(400)};
						box-shadow: rgba(0, 0, 0, 0.19) 0px 1px 5px;
						position: relative;
						border-radius: 5px;
						overflow: hidden;
						cursor: pointer;
						transition: transform 900ms;
						&:hover {
							transform: translateY(-0.6%);
						}
					`;
				case "main-all-item-image":
					return css`
						width: 100%;
						height: ${calcRem(232)};
						background-image: url(${({ bg }) => bg});
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
					`;
				case "main-all-item-info":
					return css`
						padding: 0 20px 20px 20px;
					`;

				case "list-item":
					return css`
						max-width: ${calcRem(243)};
						width: 100%;
						height: ${calcRem(480)};
						border: 1px solid ${({ theme }) => theme.colors.line};
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						border-radius: 5px;
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
						width: 49vw;
						height: 61.6vh;
						max-width: ${calcRem(557)};
						max-height: ${calcRem(700)};
						position: absolute;
						top: 20%;
						right: 10%;
						background-color: ${({ theme }) => theme.colors.white};
						border-radius: 5px;
						align-items: center;
						/* margin: 163px 240px 217px 1103px;				 */
					`;
				case "join-text":
					return css`
						width: 49vw;
						max-width: ${calcRem(557)};
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
				case "profile":
					return css`
						width: 245px;
						/* max-width: ${calcRem(245)}; */
						height: ${calcRem(472)};
						background-color: ${({ theme }) => theme.colors.white};
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
					`;
				case "pofile-namebox":
					return css`
						width: 20vw;
						max-width: ${calcRem(200)};
						height: ${calcRem(112)};
						background-color: ${({ theme }) => theme.colors.white};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
					`;
				case "level":
					return css`
						width: 4.5vw;
						max-width: ${calcRem(50)};
						height: ${calcRem(25)};
						background-color: #f6cd3c;
						border-radius: 50px;
						text-align: center;
						position: relative;
					`;
				case "category-box":
					return css`
						width: 20vw;
						max-width: ${calcRem(200)};
					`;
				case "category-title-box":
					return css`
						width: 18vw;
						max-width: ${calcRem(200)};
					`;
				case "mypage-nav":
					return css`
						width: 74.5vw;
						max-width: ${calcRem(846)};
						height: ${calcRem(30)};
						background-color: ${({ theme }) => theme.colors.white};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding-bottom: 40px;
						padding-left: 10px;
						/* border: 1px solid black; */
					`;
				case "mypage-category":
					return css`
						width: 74.5vw;
						max-width: ${calcRem(846)};
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
						width: 74.5vw;
						max-width: ${calcRem(846)};
						height: ${calcRem(105)};
						background-color: ${({ theme }) => theme.colors.white};
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
						justify-content: center;
						align-items: center;
					`;
				case "board-box":
					return css`
						width: 74.5vw;
						max-width: ${calcRem(846)};
						height: ${calcRem(198)};
						background-color: ${({ theme }) => theme.colors.white};
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						/* border-radius: 5px; */
					`;
				case "board-inbox":
					return css`
						width: 56.3vw;
						max-width: ${calcRem(639)};
						height: ${calcRem(27)};
					`;
				case "board-smaillbox":
					return css`
						width: 48.9vw;
						max-width: ${calcRem(556)};
						height: ${calcRem(121)};
					`;
				case "board-minibutton":
					return css`
						display: flex;
						justify-content: center;
						align-items: center;
					`;
				/* 글쓰기 페이지 */
				case "cafe-review-rating-wrap":
					return css`
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
						padding: 35px 60px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						& :last-child {
							border-bottom: none;
						}
					`;
				case "cafe-review-rating-item":
					return css`
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding: 20px;
					`;
				case "cafe-review-rating":
					return css`
						width: ${calcRem(282)};
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
				case "cafe-review-rating-title":
					return css`
						position: relative;
					`;
				case "cafe-review-thumbnail-wraper":
					return css`
						position: relative;
					`;
				case "cafe-review-rating-info":
					return css`
						width: ${calcRem(122)};
					`;
				case "cafe-review-map-item":
					return css`
						border: 1px solid ${({ theme }) => theme.colors.line};
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						border-radius: 5px;
					`;
				case "cafe-review-map":
					return css`
						width: ${calcRem(772)};
						height: ${calcRem(509)};
					`;
				case "cafe-review-map-content-wraper":
					return css`
						width: ${calcRem(363)};
						height: ${calcRem(509)};
						padding: 25px 25px;
						overflow: scroll;
						::-webkit-scrollbar {
							display: none;
						}
					`;
				case "cafe-write-pick-info":
					return css`
						/* height: ${calcRem(105)}; */
						height: 100%;
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding: 10px 0 20px 0;
						&::before {
							content: "";
							background-image: url(${location});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: 6%;
							max-width: ${calcRem(19)};
							height: ${calcRem(23)};
							display: inline-block;
							position: relative;
							margin: 0 5px 0 0;
							top: 2px;
						}
					`;
				/* 상세 페이지 */
				case "detail-container":
					return css`
						padding: 0 0 30px 0;
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
					`;
				case "detail-info":
					return css`
						padding: 23px 0;
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
					`;

				case "detail-content":
					return css`
						padding: 50px 0 60px 0;
					`;
				case "detail-content-image-wraper":
					return css`
						width: 45%;
						max-width: ${calcRem(460)};
						height: ${calcRem(460)};
						overflow: hidden;
						border-radius: 5px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
					`;
				case "detail-content-desc":
					return css`
						width: 55%;
						max-width: ${calcRem(652)};
						height: ${calcRem(460)};
						border: 1px solid ${({ theme }) => theme.colors.line};
						padding: 30px;
						border-radius: 5px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						font-size: ${({ theme }) => theme.fontSizes.xl};
						line-height: 1.2;
						letter-spacing: 0.01rem;
						overflow: scroll;
						::-webkit-scrollbar {
							display: none;
						}
					`;
				case "cafe-detail-rating":
					return css`
						width: ${calcRem(282)};
						& svg {
							color: #c4c4c4;
							cursor: pointer;
						}
						.active {
							color: #fdd237;
						}
					`;
				case "detail-map":
					return css`
						border-radius: 5px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						border: 1px solid ${({ theme }) => theme.colors.line};
						overflow: hidden;
					`;
				case "detail-map-desc":
					return css`
						width: 100%;
						height: ${calcRem(100)};
						background-color: ${({ theme }) => theme.colors.white};
						padding: 20px 40px;
						position: relative;
					`;
				case "detail-map-desc-content":
					return css`
						&::before {
							content: "";
							background-image: url(${location});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: 6%;
							max-width: ${calcRem(19)};
							height: ${calcRem(25)};
							display: inline-block;
							position: absolute;
							top: 36px;
						}
					`;
				case "detail-map-desc-address":
					return css`
						padding: 0 0 0 24px;
					`;
				case "cafe-write-address":
					return css`
						color: ${({ theme }) => theme.colors.dark_gray};
					`;
				/* 상세페이지 댓글 */
				case "comment-wrap":
					return css``;
				case "comment-item-wrap":
					return css`
						border-bottom: 1px solid ${({ theme }) => theme.colors.line};
						padding: 0 18px;
					`;
				case "comment-user-info":
					return css`
						width: 100%;
						max-width: ${calcRem(750)};
						height: ${calcRem(80)};
					`;
				case "comment-info":
					return css`
						width: 100%;
						max-width: ${calcRem(150)};
						height: ${calcRem(80)};
					`;
				case "comment-input-wrap":
					return css`
						width: 100%;
						height: ${calcRem(190)};
						border: 1px solid ${({ theme }) => theme.colors.line};
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						border-radius: 5px;
						padding: 25px;
						&:focus {
							border: 1px solid ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "":
					return css``;
				default:
					break;
			}
		}}
	}
`;
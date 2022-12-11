import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import search from "../../assets/icons/search.png";
import fixed_write from "../../assets/icons/fixed_write.png";
import { image_delete, comment_delete, comment_edit } from "../../assets/icons";

export const Button = styled.button`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "fixed-write":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.lg};
						width: 100%;
						border-radius: 50%;
						max-width: ${calcRem(97)};
						height: ${calcRem(97)};
						background-color: ${({ theme }) => theme.colors.main};
						position: fixed;
						bottom: 80px;
						right: 60px;
						padding: 30px;
						z-index: 5;
						&::before {
							content: "";
							background-image: url(${fixed_write});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: ${calcRem(36)};
							height: ${calcRem(36)};
							display: inline-block;
							position: relative;
						}
					`;
				case "error":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxl};

						border: 1px solid ${({ theme }) => theme.colors.line};
						padding: 17px 25px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						color: ${({ theme }) => theme.colors.dark_gray};
						background-color: ${({ theme }) => theme.colors.main};
						font-weight: 600;
						text-align: center;
						letter-spacing: 1.3;
						border-radius: 5px;
						transition: all 300ms;
						&:hover {
							background-color: ${({ theme }) => theme.colors.main_purple};
							color: ${({ theme }) => theme.colors.white};
						}
					`;
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						width: 41.5vw;
						height: 5.3vw;
						max-width: ${calcRem(472)};
						max-height: ${calcRem(60)};
						min-height: ${calcRem(60)};
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						font-size: ${({ theme }) => theme.fontSizes.xl};
						font-weight: 700;
					`;
				case "join-duplicate":
					return css`
						width: 100%;
						max-width: ${calcRem(97)};
						height: 60px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						font-weight: 700;
						text-align: center;
					`;
				/* 마이페이지 */
				case "mypage":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 600;
						&:hover {
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				/* 메인페이지 */
				case "main-login":
					return css`
						width: 100%;
						min-width: 50px;
						max-width: ${calcRem(99)};
						height: 38px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 50px;
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.darkgray};
						border: 1px solid ${({ theme }) => theme.colors.line};
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						&:hover {
							opacity: 0.8;
						}
					`;
				case "main-logout":
					return css`
						width: 100%;
						min-width: 50px;
						max-width: ${calcRem(99)};
						height: 38px;
						background-color: ${({ theme }) => theme.colors.white};
						border-radius: 50px;
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.darkgray};
						border: 1px solid ${({ theme }) => theme.colors.line};
						padding: 0 4px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						transition: all 300ms;
						&:hover {
							background-color: ${({ theme }) => theme.colors.main};
						}
						@media screen and (min-width: 1000px) {
							width: 100%;
							white-space: nowrap;
							min-width: 73px;
						}
					`;
				case "main-search":
					return css`
						position: absolute;
						top: 13px;
						right: 25px;
						width: ${calcRem(21)};
						height: ${calcRem(21)};
						background-color: ${({ theme }) => theme.colors.white};
						background-image: url(${search});
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
					`;
				case "main-category":
					return css`
						width: 100%;
						max-width: ${calcRem(90)};
						height: ${calcRem(129)};
						font-size: ${({ theme }) => theme.fontSizes.base};
						background-color: transparent;
					`;
				case "main-canya-pick-nav":
					return css`
						font-weight: 800;
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						background-color: ${({ pick, theme }) => {
							return pick ? theme.colors.main : ``;
						}};

						&:hover {
							background-color: ${({ theme }) => theme.colors.main};
						}
					`;
				case "main-carousel-hot":
					return css`
						font-weight: 700;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						color: ${({ theme }) => theme.colors.white};
						border: 2px solid ${({ theme }) => theme.colors.white};
						border-radius: 5px;
						padding: 17px 25px;
						&:hover {
							opacity: 0.9;
							background-color: ${({ theme }) => theme.colors.white};
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "main-carousel-rate":
					return css`
						font-weight: 700;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						color: ${({ theme }) => theme.colors.dark_gray};
						border: 2px solid ${({ theme }) => theme.colors.dark_gray};
						border-radius: 5px;
						padding: 17px 25px;
						&:hover {
							opacity: 0.9;
							background-color: ${({ theme }) => theme.colors.white};
						}
					`;
				case "more":
					return css`
						width: 100%;
						text-align: end;
						font-weight: 700;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						color: ${({ theme }) => theme.colors.main_purple};
						&:hover {
							opacity: 0.7;
						}
					`;
				/* 글쓰기 페이지 */
				case "cafe-review-thumbnail-delete":
					return css`
						width: 100%;
						max-width: ${calcRem(44)};
						height: ${calcRem(44)};
						background-image: url(${image_delete});
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
						position: absolute;
						top: -16px;
						right: -13px;
						&:hover {
							opacity: 0.9;
						}
					`;
				case "cafe-review-search":
					return css`
						display: inline-block;
						width: 15%;
						height: ${calcRem(55)};
						font-size: ${({ theme }) => theme.fontSizes.lg};
						font-weight: 700;
						letter-spacing: 0.2em;
						background-color: ${({ theme }) => theme.colors.main};
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
						padding: 15px 20px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						&:hover {
							opacity: 0.8;
						}
					`;
				case "cafe-review-post":
					return css`
						display: inline-block;
						width: 33%;
						height: ${calcRem(70)};
						font-size: ${({ theme }) => theme.fontSizes.xl};
						font-weight: 700;
						letter-spacing: 0.2em;
						background-color: ${({ theme }) => theme.colors.main};
						border: 1px solid ${({ theme }) => theme.colors.line};
						border-radius: 5px;
						padding: 15px 30px;
						box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
						&:hover {
							opacity: 0.8;
						}
					`;
				/* 글쓰기 페이지 댓글 */
				case "comment-edit":
					return css`
						position: relative;
						font-weight: 700;
						&::before {
							content: "";
							background-image: url(${comment_edit});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: 100%;
							max-width: ${calcRem(19)};
							height: ${calcRem(23)};
							display: inline-block;
							position: absolute;
							top: -2px;
							left: -20px;
						}
						&:hover {
							opacity: 0.7;
						}
					`;
				case "comment-delete":
					return css`
						position: relative;
						font-weight: 700;
						&::before {
							content: "";
							background-image: url(${comment_delete});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: 100%;
							max-width: ${calcRem(19)};
							height: ${calcRem(23)};
							display: inline-block;
							position: absolute;
							top: -2px;
							left: -20px;
						}
						&:hover {
							opacity: 0.7;
						}
					`;
				case "comment-add":
					return css`
						width: 100%;
						height: ${calcRem(40)};
						font-size: ${({ theme }) => theme.fontSizes.lg};
						color: ${({ theme }) => theme.colors.main_purple};
						font-weight: 700;
						&:hover {
							opacity: 0.8;
						}
					`;
				case "main-user-info":
					return css`
						&:hover {
							opacity: 0.9;
						}
					`;
				/* 인기 / 상세 / 전체 리스트 페이지 */
				case "detail-edit":
					return css`
						width: 40px;
						font-weight: 700;
						&:hover {
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				/* 커뮤니티 페이지 */
				case "post":
					return css`
						width: 71px;
						height: 37px;
						font-weight: 500;
						background-color: ${({ theme }) => theme.colors.line};
						font-size: ${({ theme }) => theme.fontSizes.base};
						border-radius: 5px;
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "chat":
					return css`
						width: 68.5vw;
						height: 7.7vh;
						max-width: ${calcRem(800)};
						max-height: ${calcRem(90)};
						font-weight: 700;
						background-color: ${({ theme }) => theme.colors.main};
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						border-radius: 5px;
						padding: 2.5vh auto;
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "comu-add":
					return css`
						width: 100%;
						height: ${calcRem(55)};
						font-weight: 700;
						background-color: ${({ theme }) => theme.colors.main};
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						border-radius: 5px;
						padding: 2.5vh auto;
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				default:
					break;
			}
		}}
	}
	/* 모바일 사이즈 */
	${({ size }) => {
		switch (size) {
			case "l":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(40)};
					border-radius: 5px;
					background-color: ${({ theme }) => theme.colors.main};
					font-size: ${({ theme }) => theme.fontSizes.medium};
					font-weight: 700;
					padding: "12px auto";
				`;
			case "s":
				return css`
					width: ${calcRem(58)};
					height: ${calcRem(40)};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.medium};
					padding: "12px auto";
				`;
			case "s-main":
				return css`
					width: ${calcRem(58)};
					height: ${calcRem(40)};
					border-radius: 5px;
					background-color: ${({ theme }) => theme.colors.main};
					font-size: ${({ theme }) => theme.fontSizes.medium};
					padding: "12px auto";
				`;
			case "xs":
				return css`
					width: ${calcRem(46)};
					height: ${calcRem(24)};
					border-radius: 5px;
					background-color: ${({ theme }) => theme.colors.gray};
					font-size: ${({ theme }) => theme.fontSizes.small};
					color: ${({ theme }) => theme.colors.black};
					padding: "12px auto";
				`;
			case "xs-trans":
				return css`
					width: ${calcRem(46)};
					height: ${calcRem(24)};
					border-radius: 5px;
					border: 2px solid ${({ theme }) => theme.colors.line};
					background-color: transparent;
					font-size: ${({ theme }) => theme.fontSizes.small};
					color: ${({ theme }) => theme.colors.black};
					padding: "12px auto";
				`;
			default:
				break;
		}
	}}
`;

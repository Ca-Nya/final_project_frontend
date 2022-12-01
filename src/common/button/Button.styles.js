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
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						width: 41.5vw;
						height: 5.3vw;
						max-width: ${calcRem(472)};
						max-height: ${calcRem(60)};
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
						max-width: ${calcRem(99)};
						height: 38px;
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 50px;
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.darkgray};
						border: 1px solid ${({ theme }) => theme.colors.line};

						&:hover {
							opacity: 0.8;
						}
					`;
				case "main-search":
					return css`
						position: absolute;
						top: 11px;
						right: 42px;
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
				default:
					break;
			}
		}}
	}
`;

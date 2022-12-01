import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Image = styled.img`
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	border-radius: ${({ bd }) => (bd ? bd : "")};

	${({ variant }) => {
		switch (variant) {
			/* 상세 페이지 */
			case "detail-review-profile":
				return css`
					width: 50px;
					height: 50px;
					object-fit: cover;
					object-position: center;
				`;
			case "detail-review":
				return css`
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				`;
			/* 메인 페이지 */
			case "main-canya-pick":
				return css`
					width: 100%;
					height: ${calcRem(247)};
					object-fit: cover;
					object-position: center;
				`;
			case "small-profile":
				return css`
					width: ${calcRem(37)};
					height: ${calcRem(37)};
					object-fit: cover;
					object-position: center;
					border-radius: 50%;
				`;
			case "main-category":
				return css`
					width: 100%;
					max-height: 90px;
					border-radius: 50%;
					border: 1px solid ${({ theme }) => theme.colors.line};
					padding: 22%;
					background-color: ${({ theme }) => theme.colors.white};
					transition: border 200ms;
					&:hover {
						border: 3px solid ${({ theme }) => theme.colors.main};
					}
				`;

			/* 마이 페이지 */
			case "mypage-profile":
				return css`
					width: 11.3vw;
					height: 11.3vw;
					max-width: ${calcRem(128)};
					max-height: ${calcRem(128)};
					border-radius: 50%;
					border: 5px solid #f6cd3c;
					object-fit: cover;
					object-position: center;
				`;
			case "mypage-post":
				return css`
					width: 23.5vw;
					height: 23.5vw;
					max-width: ${calcRem(266)};
					max-height: ${calcRem(266)};
					border-radius: 5%;
				`;
			case "mypage-icon":
				return css`
					width: 2vw;
					height: 2vw;
					max-width: ${calcRem(38)};
					max-height: ${calcRem(38)};
					min-width: ${calcRem(25)};
					min-height: ${calcRem(25)};
				`;
			case "mypage":
				return css`
					width: 100%;
					height: 429px;
					object-fit: cover;
					object-position: center;
				`;
			case "profile-edit":
				return css`
					&:hover {
						cursor: pointer;
						filter: invert(60%) sepia(41%) saturate(4200%) hue-rotate(240deg)
							brightness(150%) contrast(60%);
					}
				`;
			case "myboard-post":
				return css`
					width: 14.8vw;
					height: 14.8vw;
					max-width: ${calcRem(168)};
					max-height: ${calcRem(168)};
					border-radius: 5%;
				`;
			case "mini-edit":
				return css`
					&:hover {
						filter: invert(60%) sepia(41%) saturate(4200%) hue-rotate(240deg)
							brightness(150%) contrast(60%);
					}
				`;
			/* 글쓰기 페이지 */
			case "cafe-review-thumbnail":
				return css`
					display: block;
					width: 100%;
					max-width: ${calcRem(210)};
					height: ${calcRem(210)};
					border-radius: 5px;
				`;
			case "cafe-review-rating-item":
				return css`
					max-width: ${calcRem(42)};
					height: ${calcRem(42)};
					position: absolute;
					top: -11px;
					left: -30px;
				`;
			/* 상세 페이지 댓글 */
			case "comment-profile":
				return css`
					max-width: ${calcRem(70)};
					height: ${calcRem(70)};
					object-fit: cover;
					object-position: center;
					border-radius: 50%;
				`;
			default:
				break;
		}
	}}
`;

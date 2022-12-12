import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Image = styled.img`
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	border-radius: ${({ bd }) => (bd ? bd : "")};

	${({ variant }) => {
		switch (variant) {
			/* 공통 */
			case "spinner":
				return css`
					width: ${calcRem(90)};
					height: ${calcRem(90)};
				`;
			case "main-logo":
				return css`
					width: 100%;
					height: ${calcRem(50)};
					object-fit: contain;
					object-position: center;
				`;
			/* 상세 페이지 */
			case "medium-profile":
				return css`
					width: ${calcRem(50)};
					height: ${calcRem(50)};
					object-fit: cover;
					object-position: center;
					border-radius: 50%;
					${({ rank }) => {
						switch (rank) {
							case "venti":
								return css`
									border: 3px solid ${({ theme }) => theme.colors.point};
								`;
							default:
								break;
						}
					}}
				`;
			case "detail-review":
				return css`
					width: 100%;
					height: ${calcRem(460)};
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
					${({ rank }) => {
						switch (rank) {
							case "venti":
								return css`
									border: 3px solid ${({ theme }) => theme.colors.point};
								`;
							default:
								break;
						}
					}}
				`;
			case "main-category":
				return css`
					width: 100%;
					max-height: ${calcRem(90)};
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
					/* width: 11.3vw;
					height: 11.3vw; */
					width: ${calcRem(128)};
					height: ${calcRem(128)};
					/* max-width: ${calcRem(128)};
					max-height: ${calcRem(128)}; */
					border-radius: 50%;					
					object-fit: cover;
					object-position: center;
					${({ rank }) => {
						switch (rank) {
							case "venti":
								return css`
									border: 5px solid ${({ theme }) => theme.colors.point};
								`;
							case "tall":
								return css`
									border: 5px solid #f6cd3c;
								`;
								case "grande":
								return css`
									border: 5px solid${({ theme }) => theme.colors.main_purple};
								`;
							default:
								break;
						}
					}}
				`;
			case "mypage-post":
				return css`
					width: 23.5vw;
					height: 23.5vw;
					max-width: ${calcRem(266)};
					max-height: ${calcRem(266)};
					border-radius: 5px;
					&:hover {
						cursor: pointer;
					}
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
					width: 70px;
					height: ${calcRem(70)};
					object-fit: cover;
					object-position: center;
					border-radius: 50%;
				`;
			/* 카테고리 리스트 페이지 */
			case "list-item":
				return css`
					width: 100%;
					height: ${calcRem(220)};
					object-fit: cover;
					object-position: center;
					&:hover {
						filter: brightness(80%);
					}
				`;
			/* 커뮤니티 리스트 페이지 */
			case "comu-item":
				return css`
					width: 39.2vw;
					height: 14.4vh;
					max-width: ${calcRem(458)};
					max-height: ${calcRem(168)};
					border-radius: 5px;
					object-fit: cover;
					object-position: center;
					&:hover {
						cursor: pointer;
						filter: brightness(80%);
					}
				`;
			case "comu-hit":
				return css`
					width: 1.4vw;
					height: 1.4vh;
					max-width: ${calcRem(16)};
					max-height: ${calcRem(16)};
					border-radius: 5px;
					object-fit: cover;
					object-position: center;
					&:hover {
						cursor: pointer;
					}
				`;
			case "comu-hit-l":
				return css`
					width: 3.4vw;
					height: 3.4vh;
					max-width: ${calcRem(40)};
					max-height: ${calcRem(40)};
					object-fit: cover;
					object-position: center;
					svg > {
						fill: ${({ theme }) => theme.colors.gray};
					}
				`;
				case "comu-image":
				return css`
					width: 68.5vw;
						height: 68.5vh;
						max-width: ${calcRem(800)};
						max-height: ${calcRem(800)};
					object-fit: cover;
					object-position: center;					
				`;

			default:
				break;
		}
	}};
	/* 모바일 사이즈 */
	${({ size }) => {
		switch (size) {
			case "xl":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(312)};
					border-radius: 5px;
				`;
			case "xl-image":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(312)};
					/* display:block;
					position: absolute;
					z-index: 1;
					outline: 0; */
				`;
			case "l-image":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(40)};
					display: block;
					/* position: absolute;
					z-index: 1;
					outline: 0;  */
				`;
			case "l":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(156)};
					border-radius: 5px;
				`;
			case "l-background":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(156)};
					position: relative;
				`;
			case "m":
				return css`
					width: ${calcRem(153)};
					height: ${calcRem(153)};
					border-radius: 5px;
				`;
			case "m-logo":
				return css`
					width: 100%;
					height: ${calcRem(50)};
					object-fit: contain;
					object-position: center;
				`;
			case "s":
				return css`
					width: ${calcRem(100)};
					height: ${calcRem(100)};
					border-radius: 5px;
				`;
			case "s-r":
				return css`
					width: ${calcRem(100)};
					height: ${calcRem(100)};
					border-radius: 50%;
					${({ rank }) => {
						switch (rank) {
							case "venti":
								return css`
									border: 3px solid ${({ theme }) => theme.colors.point};
								`;
							case "tall":
								return css`
									border: 3px solid #f6cd3c;
								`;
								case "grande":
								return css`
									border: 3px solid ${({ theme }) => theme.colors.main_purple};
								`;
							default:
								break;
						}
					}}
				`;
			case "xs":
				return css`
					width: ${calcRem(34)};
					height: ${calcRem(34)};
					border-radius: 5px;
				`;
			case "xs-r":
				return css`
					width: ${calcRem(34)};
					height: ${calcRem(34)};
					border-radius: 50%;
					${({ rank }) => {
						switch (rank) {
							case "venti":
								return css`
									border: 3px solid ${({ theme }) => theme.colors.point};
								`;
								case "tall":
								return css`
									border: 3px solid #f6cd3c;
								`;
								case "grande":
								return css`
									border: 3px solid ${({ theme }) => theme.colors.main_purple};
								`;
							default:
								break;
						}
					}}
				`;
			default:
				break;
		}
	}}
`;

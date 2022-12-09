import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Text = styled.p`
	display: ${({ dp }) => (dp ? dp : "")};
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 공통 */
				case "error":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 500;
						text-align: center;
						letter-spacing: 1.3;
					`;
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						display: flex;
						font-size: ${({ theme }) => theme.fontSizes.xxxxl};
						font-weight: 700;
					`;
				case "join-id":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xl};
						font-weight: 500;
						text-align: left;
					`;
				case "join-info":
					return css`
						display: flex;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						text-align: left;
					`;
				case "join-signup":
					return css`
						display: flex;
						font-size: ${({ theme }) => theme.fontSizes.lg};
						color: ${({ theme }) => theme.colors.black};
						text-align: left;
						text-decoration: underline;
						text-decoration-thickness: 2px;
						text-decoration-line: underline;
						text-decoration-color: ${({ theme }) => theme.colors.black};
						font-weight: 700;
						&: hover {
							cursor: pointer;
						}
					`;
				case "join-warning":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.point};
					`;
				case "join-available":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.main_purple};
					`;
				case "level":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.white};
						width: ${calcRem(80)};
						height: ${calcRem(25)};
						background-color: #f6cd3c;
						border-radius: 50px;
						text-align: center;
						line-height: ${calcRem(25)};
					`;
				case "level-name":
					return css`
						white-space: nowrap;
					`;
				case "profile-base":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.black};
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				/* 메인 페이지 */
				case "main-category":
					return css`
						height: ${calcRem(19)};
					`;
				case "main-footer-info":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
					`;
				case "main-canya-pick-content":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.lg};
						line-height: 1.1;
						height: 100%;
					`;
				case "main-footer":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						font-weight: 600;
						color: ${({ theme }) => theme.colors.main};
					`;
				case "main-carousel-hot":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						font-weight: 600;
						color: ${({ theme }) => theme.colors.white};
						line-height: 1.3;
						letter-spacing: 0.02rem;
						margin: 17px 0 0 0;
					`;
				case "main-carousel-rate":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						font-weight: 600;
						line-height: 1.3;
						color: ${({ theme }) => theme.colors.dark_gray};
						letter-spacing: 0.03rem;
						margin: 17px 0 0 0;
					`;

				/* 마이페이지 */
				case "button":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${props =>
							props.isActive
								? props.theme.colors.black
								: props.theme.colors.line};
						font-weight: ${props => (props.isActive ? 700 : 400)};
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.dark_gray};
						}
					`;
				case "button-count":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${props =>
							props.isActive
								? props.theme.colors.black
								: props.theme.colors.line};
						font-weight: ${props => (props.isActive ? 700 : 400)};
					`;
				case "add":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.main_purple};
						&:hover {
							cursor: pointer;
							transform: scale(0.9, 0.9);
						}
					`;
				case "user-name":
					return css`
						display: flex;
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						font-weight: 700;
					`;
				case "title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						color: ${({ theme }) => theme.colors.black};
						font-weight: 700;
					`;
				case "comment":
					return css`
						font-size: ${calcRem(18)};
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 400;
						width: 600px;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					`;
				case "comment-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.black};
						font-weight: 700;
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "comment-date":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.gray};
						font-weight: 400;
					`;
				case "board-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xl};
						color: ${({ theme }) => theme.colors.black};
						font-weight: 700;
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "all-title":
					return css`
						width: 23.4vw;
						max-width: ${calcRem(266)};
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 600;
						text-align: center;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: normal;
						line-height: 1.2;
						max-height: 1.2;
						word-wrap: break-word;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						&:hover {
							cursor: pointer;
							color: ${({ theme }) => theme.colors.main_purple};
						}
					`;
				case "board-content":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 400;
						display: inline-block;
						width: 44vw;
						max-width: ${calcRem(500)};
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: normal;
						line-height: 1.2;
						max-height: 1.2;
						text-align: left;
						word-wrap: break-word;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
					`;
				/* 글쓰기 페이지 */
				case "cafe-review-rating-info":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xl};
						color: ${({ theme }) => theme.colors.dark_gray};
						font-weight: 400;
						text-align: center;
					`;
				case "cafe-write-address":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.regular};
						color: ${({ theme }) => theme.colors.gray};
						font-weight: 400;
						padding: 4px 0;
					`;
				/* 카테고리별 리스트 */
				case "list-item-date":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.regular};
						color: ${({ theme }) => theme.colors.gray};
						font-weight: 400;
						text-align: end;
					`;
				default:
					break;
			}
		}}
	}

	/* 모바일 사이즈 */
	${({ size }) => {
		switch (size) {
			case "s":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.small};
					font-weight: 300;
					> span {
						font-weight: 500;
					}
				`;
			case "s-red":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.small};
					color: ${({ theme }) => theme.colors.point};
					font-weight: 300;
					> span {
						font-weight: 500;
					}
				`;
			case "s-purple":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.small};
					color: ${({ theme }) => theme.colors.main_purple};
					font-weight: 300;
					> span {
						font-weight: 500;
					}
				`;
			case "m":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.medium};
					font-weight: 700;
					> span {
						font-weight: 400;
					}
				`;
			case "l":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					font-weight: 700;
					> span {
						font-weight: 400;
					}
				`;
				case "xl":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.xxl};
					font-weight: 700;
					> span {
						font-weight: 400;
					}
				`;
			case "l-line":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
					font-weight: 700;
					border-bottom: 2px solid color: ${({ theme }) => theme.colors.gray};;
					> span {
						font-weight: 400;
					}
				`;
			case "s-board":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.small};
					color: ${({ theme }) => theme.colors.dark_gray};
					display: inline-block;
					width: ${calcRem(180)};
					/* height: ${calcRem(30)}; */
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: normal;
					line-height: 1.2;
					max-height: 1.2;
					text-align: left;
					word-wrap: break-word;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				`;
						case "s-level":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.base};
						color: ${({ theme }) => theme.colors.white};
						width: ${calcRem(50)};
						height: ${calcRem(25)};					
						border-radius: 50px;
						text-align: center;
						line-height: ${calcRem(25)};
						${({ rank }) => {
						switch (rank) {
							case "venti":
								return css`
									background-color: ${({ theme }) => theme.colors.point};
								`;
								case "tall":
								return css`
									background-color: #f6cd3c;
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

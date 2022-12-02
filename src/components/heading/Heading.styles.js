import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import mainNavLogo from "../../assets/icons/mainNavLogo.png";
import location from "../../assets/icons/location.png";

export const FirstHeading = styled.h1`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-logo":
					return css`
						width: 100%;
						height: 100%;
						font-weight: 800;
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
					`;
				case "title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.titleSize};
						font-weight: 700;
						letter-spacing: ${calcRem(1)};
					`;
				default:
					break;
			}
		}}
	}
`;

export const SecondHeading = styled.h2`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-footer":
					return css`
						font-weight: 700;
						font-size: ${({ theme }) => theme.fontSizes.xxxl};
						color: ${({ theme }) => theme.colors.main};
					`;
				case "main-best-item":
					return css`
						font-weight: 700;
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						color: ${({ theme }) => theme.colors.white};
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						letter-spacing: 0.1rem;
						text-align: center;
					`;
				case "main-new-address":
					return css`
						font-weight: 700;
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						text-align: center;
						letter-spacing: 0.05rem;
					`;
				case "main-all-item-address":
					return css`
						display: inline-block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						font-weight: 600;
						width: 100%;
						text-align: center;
						&::before {
							content: "";
							background-image: url(${location});
							background-position: center center;
							background-size: contain;
							background-repeat: no-repeat;
							width: 9%;
							max-width: ${calcRem(20)};
							height: ${calcRem(20)};
							display: inline-block;
							position: relative;
							left: -3px;
						}
					`;
				/* 글쓰기 페이지 / 상세 페이지 */
				case "title":
					return css`
						display: inline-block;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						font-weight: 600;
						width: 100%;
						letter-spacing: 0.03rem;
					`;
				/* 글쓰기 페이지 댓글 */
				case "comment-user-nickname":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.lg};
						font-weight: 700;
						letter-spacing: 0.03rem;
					`;
				default:
					break;
			}
		}}
	}
`;

export const ThirdHeading = styled.h3`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 메인 페이지 */
				case "main-footer-info":
					return css`
						width: 50px;
						height: 50px;
						background-repeat: no-repeat;
						background-size: contain;
						background-position: center center;
						background-image: url(${mainNavLogo});
					`;
				case "main-canya-pick-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xxl};
						font-weight: 700;
						letter-spacing: 0.07rem;
					`;
				case "main-new-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.regular};
						padding: 6px 8px;
						font-weight: 600;
						text-transform: uppercase;
						letter-spacing: 0.06rem;
						color: ${({ theme }) => theme.colors.white};
						background-color: ${({ theme }) => theme.colors.point};
						border-radius: 15px;
						position: absolute;
						top: 10px;
						left: -6px;
					`;
				/* 글쓰기 페이지 */
				case "cafe-review-file-button-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.xl};
						padding: 6px 8px;
						font-weight: 600;
						text-transform: uppercase;
						letter-spacing: 0.06rem;
						color: ${({ theme }) => theme.colors.gray};
						border-radius: 15px;
					`;
				case "cafe-review-rating-title":
					return css`
          width: 
						letter-spacing: 0.06rem;
            font-size: ${({ theme }) => theme.fontSizes.xl};
						font-weight: 600;
						text-align: center;
            width: ${calcRem(100)};
					`;
				/* 카테고리별 리스트 페이지 */
				case "list-title":
					return css`
						font-size: ${({ theme }) => theme.fontSizes.lg};
						font-weight: 700;
						letter-spacing: 0.07rem;
					`;
				default:
					break;
			}
		}}
	}
`;

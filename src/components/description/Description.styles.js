import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import canya_item_star from "../../assets/icons/canya_item_star.png";
import canya_item_comment from "../../assets/icons/canya_item_comment.png";
import canya_item_heart from "../../assets/icons/canya_item_heart.png";

export const DataList = styled.dl`
	${({ variant }) => {
		switch (variant) {
			case "main-canya-pick-hashtag":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
					font-weight: 600;
					color: ${({ theme }) => theme.colors.gray};
				`;
			case "main-new-hashtag":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.regular};
					font-weight: 400;
				`;
			case "main-all-item-hashtag":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
					font-weight: 600;
					color: ${({ theme }) => theme.colors.dark_gray};
				`;
			case "small-date":
				return css`
					width: 22%;
					text-align: end;
					color: ${({ theme }) => theme.colors.gray};
					font-weight: 600;
					letter-spacing: 0.02em;
				`;
			/* 상세 페이지 */
			case "detail-date":
				return css`
					width: 100%;
					color: ${({ theme }) => theme.colors.gray};
					font-weight: 600;
					letter-spacing: 0.02em;
				`;
			case "detail-rating":
				return css`
					height: ${calcRem(90)};
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					background-color: ${({ theme }) => theme.colors.main};
					font-size: ${({ theme }) => theme.fontSizes.xxl};
					font-weight: 700;
					letter-spacing: 0.02em;
				`;
			case "detail-heart-count":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
					font-weight: 600;
				`;
			/* 글쓰기 페이지 댓글 */
			case "comment-count":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.lg};
					font-weight: 700;
					font-weight: 600;
					letter-spacing: 0.02em;
				`;
			case "comment-date":
				return css`
					width: 100%;
					text-align: end;
					color: ${({ theme }) => theme.colors.gray};
					font-weight: 600;
					letter-spacing: 0.02em;
				`;
			default:
				break;
		}
	}}
`;

export const DataTerm = styled.dt`
	${({ variant }) => {
		switch (variant) {
			default:
				break;
		}
	}}
`;

export const DataDesc = styled.dd`
	${({ variant }) => {
		switch (variant) {
			case "main-canya-pick-content-nickname":
				return css`
					font-weight: 600;
				`;
			case "main-canya-pick-content-rate":
				return css`
					&::before {
						content: "";
						background-image: url(${canya_item_star});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(18)};
						height: ${calcRem(18)};
						display: inline-block;
						position: relative;
						top: 4px;
						left: -3px;
					}
				`;
			case "main-canya-pick-content-heart":
				return css`
					text-align: end;
					&::before {
						content: "";
						background-image: url(${canya_item_heart});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(20)};
						height: ${calcRem(18)};
						display: inline-block;
						position: relative;
						top: 20px;
						left: -10px;
					}
				`;
			case "main-canya-pick-content-comment":
				return css`
					text-align: end;
					&::before {
						content: "";
						background-image: url(${canya_item_comment});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(20)};
						height: ${calcRem(18)};
						display: inline-block;
						position: relative;
						top: 20px;
						left: -10px;
					}
				`;
			case "main-all-item-rate":
				return css`
					text-align: center;
					font-size: ${({ theme }) => theme.fontSizes.xxl};
					&::before {
						content: "";
						background-image: url(${canya_item_star});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(26)};
						height: ${calcRem(26)};
						display: inline-block;
						position: relative;
						top: 4px;
						left: -3px;
					}
				`;
			case "cafe-review-file-count":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.regular};
					color: ${({ theme }) => theme.colors.gray};
				`;
			/* 상세 페이지 */
			case "small-profile":
				return css`
					font-size: ${({ theme }) => theme.fontSizes.regular};
					font-weight: 600;
					letter-spacing: 0.02em;
				`;
			/* 카테고리별 리스트 페이지 */
			case "list-content-rate":
				return css`
					position: relative;
					&::before {
						content: "";
						background-image: url(${canya_item_star});
						background-position: center center;
						background-size: contain;
						background-repeat: no-repeat;
						width: ${calcRem(18)};
						height: ${calcRem(18)};
						display: inline-block;
						position: absolute;
						top: -1px;
						left: -20px;
					}
				`;

			default:
				break;
		}
	}}
`;

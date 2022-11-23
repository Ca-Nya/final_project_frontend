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
					object-fit: contain;
					object-position: center;
				`;
			case "detail-review":
				return css`
					width: 300px;
					height: 300px;
					object-fit: cover;
					object-position: center;
				`;
			/* 메인 페이지 */
			case "main-canya-pick":
				return css`
					width: 300px;
					height: 200px;
					object-fit: cover;
					object-position: center;
				`;
			case "main-canya-pick-profile":
				return css`
					width: 40px;
					height: 40px;
					object-fit: cover;
					object-position: center;
					border-radius: 50%;
				`;
			case "main-cateory":
				return css`
					border-radius: 50%;
					border: 1px solid ${({ theme }) => theme.colors.line};
					padding: ${({ theme }) => theme.paddings.lg};
					background-color: ${({ theme }) => theme.colors.white};
				`;
			/* 마이 페이지 */
			case "mypage-profile":
				return css`
					width: 170px;
					height: 170px;
					border-radius: 50%;
					object-fit: cover;
					object-position: center;
				`;
			case "mypage-post":
				return css`
					width: 200px;
					height: 200px;
				`;
			default:
				break;
		}
	}}
`;

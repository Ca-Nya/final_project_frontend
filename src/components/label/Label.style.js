import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Label = styled.label`
	/* >= 768 (Desktop) */
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 마이 페이지 */
				case "main-select":
					return css``;
				/* 글쓰기 페이지 */
				case "cafe-review-file-button":
					return css`
						display: block;
						width: 27%;
						max-width: ${calcRem(210)};
						height: ${calcRem(210)};
						background-color: ${({ theme }) => theme.colors.main};
						border-radius: 5px;
						cursor: pointer;
					`;
				/* 마이페이지 */
				case "profile":
					return css`
						position: relative;
						:hover > span {
							opacity: 1;
							width: ${calcRem(120)};
							height: ${calcRem(30)};
						}
						span {
							transition: all 0.5s;
							opacity: 0;
							position: absolute;
							bottom: 30px;
							left: 20px;
							width: 0;
							height: 0;
							display: block;
							background-color: ${({ theme }) => theme.colors.main_purple};
							text-align: center;
							line-height: 30px;
							border-radius: 5px;
							color: ${({ theme }) => theme.colors.white};
							font-size: ${({ theme }) => theme.fontSizes.base};
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
				case "xl-image":
				return css`
					width: ${calcRem(312)};
					height: ${calcRem(312)};					
					border-radius: 5px;								
					
				`;		
			default:
				break;
		}
	}}
`;

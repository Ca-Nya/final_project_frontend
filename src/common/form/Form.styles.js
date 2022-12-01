import styled, { css } from "styled-components";
import { calcRem } from "../../themes";

export const Form = styled.form`
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						display: flex;
						width: 49vw;
						height: 61.6vw;
						max-width: ${calcRem(557)};
						max-height: ${calcRem(700)};
						flex-direction: column;
						align-items: center;
						background-color: ${({ theme }) => theme.colors.white};
						border-radius: 5px;
					`;
				default:
					break;
			}
		}}
	}
`;

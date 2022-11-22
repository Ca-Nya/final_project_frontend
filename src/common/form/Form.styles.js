import styled, { css } from "styled-components";

export const Form = styled.form`
	${({ theme }) => theme.device.desktop} {
		${({ variant }) => {
			switch (variant) {
				/* 로그인 / 회원가입 페이지 */
				case "join":
					return css`
						display: flex;
						width: 557px;
						height: 700px;
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

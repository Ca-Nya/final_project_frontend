import styled, { css } from "styled-components";
import { calcRem } from "../../themes";
import loginId from "../../../src/assets/icons/loginId.png";
import password from "../../../src/assets/icons/password.png";

export const Input = styled.input`
	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					${({ purpose }) => {
						return purpose === "sign-in"
							? `
						   border-radius: 5px;
							 background-image: url(${loginId});
							 background-repeat: no-repeat;
							 background-position: 15px center;
							 padding-left: 51px;
						`
							: `
						     border-radius: 5px;
							 background-image: url(${password});
							 background-repeat: no-repeat;
							 background-position: 15px center;
							 padding-left: 51px;
						`;
					}};
					width: 41.5vw;
					height: 5.3vw;
					max-width: ${calcRem(472)};
					max-height: ${calcRem(60)};
					/* min-height: ${calcRem(40)}; */
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					font-size: 1.6vw max(${({ theme }) => theme.fontSizes.lg});
					&:placeholder{
						font-size: 1.6vw;
					}
				`;
			case "signup":
				return css`
					width: ${calcRem(355)};
					height: 60px;
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					border-radius: 5px;
					padding-left: 15px;
				`;
			case "signup-password":
				return css`
					width: ${calcRem(472)};
					height: 60px;
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					border-radius: 5px;
					padding-left: 15px;
				`;
			/* 마이페이지 */
			case "profile-edit":
				return css`
					display: none;
				`;
			case "comment-edit":
				return css`
					width: ${calcRem(355)};
					height: 30px;
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					background-color: aliceblue;
					border-radius: 10px;
					padding-left: 15px;
				`;
			/* 메인 페이지 */
			case "main-search":
				return css`
					width: 96%;
					height: ${calcRem(46)};
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 20px;
					padding: 15px 15px 15px 20%;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
				`;
			/* 글쓰기 페이지 */
			case "cafe-review-title":
				return css`
					display: block;
					width: 100%;
					height: ${calcRem(55)};
					font-size: ${({ theme }) => theme.fontSizes.lg};
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					padding: 15px 30px;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
					&:focus {
						border: 1px solid ${({ theme }) => theme.colors.main_purple};
					}
				`;
			case "cafe-review-search":
				return css`
					display: block;
					width: 85%;
					height: ${calcRem(55)};
					font-size: ${({ theme }) => theme.fontSizes.lg};
					border: 1px solid ${({ theme }) => theme.colors.line};
					border-radius: 5px;
					padding: 15px 30px;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
					&:focus {
						border: 1px solid ${({ theme }) => theme.colors.main_purple};
					}
				`;
			default:
				break;
		}
	}}
`;

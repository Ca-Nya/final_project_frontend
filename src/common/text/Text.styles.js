import styled, { css } from "styled-components";

export const Text = styled.p`
	display: ${({ dp }) => (dp ? dp : "")};
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};

	${({ variant }) => {
		switch (variant) {
			case "join":
				return css`
					display: flex;
<<<<<<< HEAD
				    margin:99px 0 24px 0;
=======
				    margin: 99px 0 24px 0;
>>>>>>> c2d08dad19deb8258f52fea4a638bf14f92df138
					font-size: ${({ theme }) => theme.fontSizes.xxxl};
					font-weight: 700;

				`;
<<<<<<< HEAD
				
=======
				case "join-id":
				return css`
					display: flex;
					width: 557px;					
				    margin: 0 0 8px 110px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					text-align: left;

				`;
				case "join-pw":
				return css`
					display: flex;
					width: 557px;					
				    margin: 16px 0 8px 110px;
					font-size: ${({ theme }) => theme.fontSizes.xl};
					font-weight: 500;
					text-align: left;

				`;
				case "join-info":
				return css`
					display: flex;				 
				    margin: 20px 0 8px 50px;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					text-align: left;

				`;
				case "join-signup":
				return css`
					display: flex;				 
				    margin: 20px 30px 0px 168px;
					font-size: ${({ theme }) => theme.fontSizes.lg};
					color:${({ theme }) => theme.colors.black} ;
					text-align: left;
					text-decoration: underline;
					text-decoration-thickness: 2px;
					text-decoration-line:underline;
					text-decoration-color:${({ theme }) => theme.colors.black};
					font-weight:700;

				`;
>>>>>>> c2d08dad19deb8258f52fea4a638bf14f92df138
			default:
				break;
		}
	}}
`;

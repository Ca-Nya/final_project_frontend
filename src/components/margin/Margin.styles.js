import styled from "styled-components";

export const Margin = styled.div`
	margin: ${({ margin }) => (margin ? margin : "")};
	display: ${({ display }) => (display ? display : "")};
`;

import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-wrap: ${({ fw }) => (fw ? fw : "nowrap")};
	flex-direction: ${({ fd }) => (fd ? fd : "row")};
	justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
	align-items: ${({ ai }) => (ai ? ai : "flex-start")};
	height: 100%;
	width: 100%;
	gap: ${({ gap }) => (gap ? gap : "")};
`;

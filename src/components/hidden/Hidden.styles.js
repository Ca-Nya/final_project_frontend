import styled from "styled-components";

export const Hidden = styled.div`
	position: absolute;
	top: -9999px;
	left: -9999px;
	z-index: -1;
	width: 1px;
	height: 1px;
	overflow: hidden;
	visibility: hidden;
`;

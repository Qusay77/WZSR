import styled from "@emotion/styled";

const SessionEventsContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	isolation: isolate;
	background: var(--White);
	border-left: 1px solid var(--Seperation);
	width: 555px;
	flex-basis: 555px;
	flex-grow: 0;
	flex-shrink: 0;
	overflow-y: auto;
	height: 100%;
`;

const ContentContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 24px;
	width: 100%;
`;

export { SessionEventsContainer, ContentContainer };

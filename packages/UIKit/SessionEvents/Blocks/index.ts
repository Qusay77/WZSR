import styled from "@emotion/styled";

const SessionEventsContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	isolation: isolate;
	background: var(--White);
	border-left: 1px solid var(--Seperation);
	flex-basis: ${({ theme }) => theme.helpers.clamp(300, 555, 1000, 1920)};
	flex-grow: 0;
	flex-shrink: 0;
	overflow-y: auto;
	height: 100%;
	@media only screen and (max-width: 1000px) {
		width: 100%;
		border-top: 1px solid var(--Seperation);
	}
`;

const ContentContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 24px;
	width: 100%;
	@media only screen and (max-width: 1000px) {
		padding: 0 ${({ theme }) => theme.helpers.clamp(4, 24, 260, 1000)};
	}
`;

export { SessionEventsContainer, ContentContainer };

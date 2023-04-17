import styled from "@emotion/styled";

const ActionButton = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 8px;
	gap: 8px;
	cursor: pointer;
	@media only screen and (max-width: 800px) {
		padding: ${({ theme }) => theme.helpers.clamp(4, 8, 260, 800)};
	}
`;

const SkipButton = styled(ActionButton)`
	border: 1px solid var(--Seperation);
	border-radius: 24px;
	@media only screen and (max-width: 800px) {
		svg {
			width: ${({ theme }) => theme.helpers.clamp(12, 24, 260, 800)};
			height: ${({ theme }) => theme.helpers.clamp(12, 24, 260, 800)};
		}
	}
`;

const PlayButton = styled(ActionButton)`
	background: var(--Purple-Primary);
	box-shadow: 0px 8px 40px rgba(124, 124, 124, 0.1);
	border-radius: 32px;
	@media only screen and (max-width: 800px) {
		svg {
			width: ${({ theme }) => theme.helpers.clamp(18, 32, 260, 800)};
			height: ${({ theme }) => theme.helpers.clamp(18, 32, 260, 800)};
		}
	}
`;

const PlayerActionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 24px;
	width: fit-content;
	height: 48px;
	@media only screen and (max-width: 800px) {
		width: 100%;
		padding: ${({ theme }) => theme.helpers.clamp(4, 8, 260, 800)}
			${({ theme }) => theme.helpers.clamp(6, 14, 260, 800)};
		height: fit-content;
		gap: ${({ theme }) => theme.helpers.clamp(2, 4, 260, 800)};
	}
`;

const PlayActionsContainer = styled(PlayerActionsContainer)`
	gap: 8px;
`;

const ProgressStamp = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 8px;
	width: fit-content;
	height: 17px;
	font-weight: 400;
	font-size: 14px;
	white-space: nowrap;
	@media only screen and (max-width: 800px) {
		font-size: ${({ theme }) => theme.helpers.clamp(10, 14, 260, 800)};
	}
`;

export {
	ActionButton,
	SkipButton,
	PlayButton,
	ProgressStamp,
	PlayActionsContainer,
	PlayerActionsContainer,
};

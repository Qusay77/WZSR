import styled from "@emotion/styled";

const ActionButton = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 8px;
	gap: 8px;
	cursor: pointer;
`;

const SkipButton = styled(ActionButton)`
	width: 40px;
	height: 40px;
	border: 1px solid var(--Seperation);
	border-radius: 24px;
`;

const PlayButton = styled(ActionButton)`
	background: var(--Purple-Primary);
	box-shadow: 0px 8px 40px rgba(124, 124, 124, 0.1);
	border-radius: 32px;
`;

const PlayerActionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 24px;
	width: fit-content;
	height: 48px;
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
`;

export {
	ActionButton,
	SkipButton,
	PlayButton,
	ProgressStamp,
	PlayActionsContainer,
	PlayerActionsContainer,
};

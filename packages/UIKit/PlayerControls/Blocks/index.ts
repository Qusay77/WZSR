import styled from "@emotion/styled";

const PlayerControlsInnerContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
	gap: 24px;
	width: 100%;
	height: 80px;
	background: var(--White);
	border-top: 1px solid var(--Seperation);
`;

const SpeedAndToggleBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 24px;
	width: fit-content;
	height: 40px;
	> p {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: var(--Text-Body);
	}
`;
const TextSeparator = styled.div`
	width: 1px;
	height: 16px;
	border: 1px solid var(--Seperation);
`;

const PlayerControlsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export {
	PlayerControlsContainer,
	PlayerControlsInnerContainer,
	SpeedAndToggleBlock,
	TextSeparator,
};

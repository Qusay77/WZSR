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

	@media only screen and (max-width: 800px) {
		flex-direction: column;
		height: fit-content;
		gap: 0;
		padding: 0;
	}
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
		font-size: ${({ theme }) => theme.helpers.clamp(9, 14, 260, 800)};
		line-height: 17px;
		color: var(--Text-Body);
	}
	@media only screen and (max-width: 800px) {
		border-top: 1px solid var(--Seperation);
		width: 100%;
		padding: ${({ theme }) => theme.helpers.clamp(10, 14, 260, 800)}
			${({ theme }) => theme.helpers.clamp(6, 14, 260, 800)};
		height: fit-content;
		gap: ${({ theme }) => theme.helpers.clamp(3, 24, 260, 800)};
		justify-content: space-between;

		div:nth-of-type(1) {
			margin-right: auto;
		}

		p:nth-of-type(2) {
			margin-left: auto;
		}
	}
`;
const TextSeparator = styled.div`
	width: 1px;
	height: 16px;
	border: 1px solid var(--Seperation);
	@media only screen and (max-width: 800px) and (min-width: 400px) {
		display: none;
	}
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

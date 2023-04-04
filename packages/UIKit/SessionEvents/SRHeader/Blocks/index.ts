import styled from "@emotion/styled";

const SRHeaderContainer = styled.div`
	display: flex;
	border-bottom: 1px solid var(--Seperation);
	padding: 24px;
	width: 100%;
`;

const SRHeaderBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	width: 100%;
	> P {
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 29px;
		font-feature-settings: "salt" on;
		color: var(--Text-Header);
	}
`;

const ShareRecordingButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 175px;
	height: 40px;
	gap: 11px;
	border: 1px solid var(--Blue-Primary);
	border-radius: 24px;
	cursor: pointer;
	> p {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: var(--Blue-Primary);
	}
`;

export { SRHeaderContainer, SRHeaderBlock, ShareRecordingButton };

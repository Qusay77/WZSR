import styled from "@emotion/styled";

const SRHeaderContainer = styled.div`
	display: flex;
	border-bottom: 1px solid var(--Seperation);
	padding: 24px;
	width: 100%;
	@media only screen and (max-width: 1000px) {
		padding: ${({ theme }) => theme.helpers.clamp(16, 24, 260, 1000)}
			${({ theme }) => theme.helpers.clamp(4, 24, 260, 1000)};
	}
`;

const SRHeaderBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: ${({ theme }) => theme.helpers.clamp(20, 40, 1000, 1920)};
	width: 100%;
	> P {
		font-style: normal;
		font-weight: 600;
		font-size: ${({ theme }) => theme.helpers.clamp(13, 24, 1000, 1920)};
		line-height: 29px;
		font-feature-settings: "salt" on;
		color: var(--Text-Header);
	}
	@media only screen and (max-width: 1000px) {
		height: ${({ theme }) => theme.helpers.clamp(20, 40, 260, 1000)};
		> P {
			font-size: ${({ theme }) => theme.helpers.clamp(13, 24, 260, 1000)};
		}
	}
`;

const ShareRecordingButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ theme }) => theme.helpers.clamp(120, 175, 1000, 1920)};
	height: ${({ theme }) => theme.helpers.clamp(30, 40, 1000, 1920)};
	gap: ${({ theme }) => theme.helpers.clamp(2, 11, 1000, 1920)};
	border: 1px solid var(--Blue-Primary);
	border-radius: 24px;
	cursor: pointer;
	> p {
		font-style: normal;
		font-weight: 500;
		font-size: ${({ theme }) => theme.helpers.clamp(10, 14, 1000, 1920)};
		line-height: 17px;
		color: var(--Blue-Primary);
	}
	> svg {
		width: ${({ theme }) => theme.helpers.clamp(14, 24, 1000, 1920)};
	}

	@media only screen and (max-width: 1000px) {
		width: ${({ theme }) => theme.helpers.clamp(120, 175, 260, 1000)};
		height: ${({ theme }) => theme.helpers.clamp(30, 40, 260, 1000)};
		gap: ${({ theme }) => theme.helpers.clamp(2, 11, 260, 1000)};

		> p {
			font-size: ${({ theme }) => theme.helpers.clamp(10, 14, 260, 1000)};
		}
		> svg {
			width: ${({ theme }) => theme.helpers.clamp(14, 24, 260, 1000)};
		}
	}
`;

export { SRHeaderContainer, SRHeaderBlock, ShareRecordingButton };

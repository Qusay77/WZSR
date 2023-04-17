import styled from "@emotion/styled";

const SpeedBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 4px;
	width: 158px;
	height: 40px;
	background: var(--White);
	border: 1px solid var(--Seperation);
	border-radius: 32px;
	@media only screen and (max-width: 800px) {
		width: fit-content;
		height: fit-content;
	}
`;

const SpeedButton = styled.div<{ active?: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 7.5px 16px;
	gap: 8px;
	width: fit-content;
	height: 32px;
	background: ${({ active }) => (active ? "var(--Blue-10)" : "none")};
	border-radius: 32px;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	color: ${({ active }) =>
		active ? "var(--Blue-Primary)" : "var(--Text-Sub)"};
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 1px 1px #48abe0;
	}
	user-select: none;

	@media only screen and (max-width: 800px) {
		padding: 7.5px ${({ theme }) => theme.helpers.clamp(8, 16, 260, 800)};
		width: fit-content;
		height: ${({ theme }) => theme.helpers.clamp(12, 32, 260, 800)};
		font-size: ${({ theme }) => theme.helpers.clamp(8, 14, 260, 800)};
	}
`;

export { SpeedBlock, SpeedButton };

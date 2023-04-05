import styled from "@emotion/styled";

const SpeedBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 4px;
	/* width: ${({ theme }) => theme.helpers.clamp(0, 158, 200, 1920)}; */
	width: 158px;
	height: 40px;
	background: var(--White);
	border: 1px solid var(--Seperation);
	border-radius: 32px;
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
`;

export { SpeedBlock, SpeedButton };

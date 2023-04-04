import styled from "@emotion/styled";

const InfoExpandableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 24px 0;
	gap: 24px;
	width: 100%;
	border-bottom: 1px solid var(--Seperation);
`;

const ShowMore = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	text-transform: capitalize;
	font-feature-settings: "salt" on;
	color: var(--Blue-Primary);
	cursor: pointer;
`;

const InfoBlocksContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 24px;
	width: 100%;
	height: fit-content;
`;

const InfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 8px;
	height: 49px;
	flex-basis: 45%;
	flex-grow: 1;
	p,
	span {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: var(--Text-Secondary);
		line-height: 17px;
	}
	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px;
		height: 24px;
		gap: 8px;
		> span {
			color: var(--Text-Body);
			display: flex;
			gap: 8px;
			align-items: center;
		}
	}
`;

export { InfoExpandableContainer, ShowMore, InfoBlocksContainer, InfoBlock };

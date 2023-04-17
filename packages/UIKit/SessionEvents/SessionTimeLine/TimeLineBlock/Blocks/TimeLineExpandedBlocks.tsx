import styled from "@emotion/styled";

const TimeLineBlockExpandedContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 16px;
	gap: ${({ theme }) => theme.helpers.clamp(18, 32, 1000, 1920)};
	isolation: isolate;
	width: 100%;
	height: fit-content;
	background: var(--White);
	border: 1px solid var(--Seperation);
`;

const EssentialInfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 0px;
	gap: 8px;
	height: 42px;
	p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		white-space: nowrap;
		line-height: 17px;
	}
	p:nth-of-type(1) {
		color: var(--Text-Sub);
	}
	p:nth-of-type(2) {
		color: var(--Text-Body);
	}
	flex: 1;
`;
const EssentialInfoBlockRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px;
	gap: ${({ theme }) => theme.helpers.clamp(12, 16, 1000, 1920)};
	width: 100%;
	height: 42px;
	div:not(:last-child) {
		border-right: 1px solid var(--Seperation);
		p {
			margin-right: 4px;
		}
	}
`;

const MiniListBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 8px;
	width: 100%;
	height: 147px;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		line-height: 17px;
		color: var(--Text-Sub);
	}
`;

const MiniList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: ${({ theme }) => theme.helpers.clamp(8, 16, 1000, 1920)};
	isolation: isolate;
	width: 100%;
	height: fit-content;
	background: #f8f8f8;
	border-radius: 4px;
	overflow-y: auto;
`;
const MiniListItem = styled.div`
	border-bottom: 1px solid var(--Seperation);
	display: inline-flex;
	gap: 5px;
	p {
		font-family: "Inter";
		font-style: normal;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		line-height: 17px;
		color: var(--Text-Body);
	}
	p:nth-of-type(1) {
		font-weight: 600;
	}
	p:nth-of-type(2) {
		font-weight: 400;
	}
`;
const TimeLineBlockExpanded = () => {
	return (
		<TimeLineBlockExpandedContainer>
			<EssentialInfoBlockRow>
				<EssentialInfoBlock>
					<p>Status Code</p>
					<p>200</p>
				</EssentialInfoBlock>
				<EssentialInfoBlock>
					<p>Method</p>
					<p>GET</p>
				</EssentialInfoBlock>
				<EssentialInfoBlock>
					<p>Duration</p>
					<p>4.33 sec</p>
				</EssentialInfoBlock>
			</EssentialInfoBlockRow>
			<MiniListBlock>
				<p>Custom Data</p>
				<MiniList>
					<MiniListItem>
						<p>Search:</p>
						<p>hanukkah+menorah</p>
					</MiniListItem>
					<MiniListItem>
						<p>Search:</p>
						<p>hanukkah+menorah</p>
					</MiniListItem>
					<MiniListItem>
						<p>Search:</p>
						<p>hanukkah+menorah</p>
					</MiniListItem>
					<MiniListItem>
						<p>Search:</p>
						<p>hanukkah+menorah</p>
					</MiniListItem>
					<MiniListItem>
						<p>Search:</p>
						<p>hanukkah+menorah</p>
					</MiniListItem>
				</MiniList>
			</MiniListBlock>
		</TimeLineBlockExpandedContainer>
	);
};

export { TimeLineBlockExpanded };

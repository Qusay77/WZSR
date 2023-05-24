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
		line-height: 17px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	p:nth-of-type(1) {
		color: var(--Text-Sub);
		margin-bottom: auto;
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
	max-height: 147px;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		line-height: 17px;
		color: var(--Text-Sub);
	}
`;
const ExpandedErrorBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 8px;
	width: 100%;
	height: fit-content;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		line-height: 17px;
		color: var(--Text-Sub);
	}
`;
const ExpandedTextBoard = styled.div`
	display: flex;
	text-align: start;
	word-break: break-word;
	padding: 16px;
	isolation: isolate;
	width: 100%;
	height: fit-content;
	background: #f8f8f8;
	border-radius: 4px;
	overflow-y: auto;
	font-style: normal;
	font-weight: 400;
	font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
	line-height: 17px;
	color: var(--Text-Body);
`;
const ExpandedText = styled.div`
	display: flex;
	text-align: start;
	isolation: isolate;
	width: 100%;
	height: fit-content;
	border-radius: 4px;
	overflow-y: auto;
	font-style: normal;
	font-weight: 400;
	font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
	line-height: 17px;
	color: var(--Text-Body);
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
	font-size: 14px;
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

const TimeLineBlockExpanded = ({
	method,
	status,
	duration,
	custom_data,
	isError,
	errorMessage,
	scriptDomain,
	scriptPath,
	httpRequest,
	type,
	pageUrl,
}: {
	duration?: string;
	method?: string;
	status?: number;
	isError?: boolean;
	errorMessage?: string;
	scriptDomain?: string;
	scriptPath?: string;
	httpRequest?: string;
	type?: string;
	custom_data?: Array<{ definitionName: string; value: string }> | null;
	pageUrl?: string;
}) => {
	const durationStr = duration ? duration?.split(".")[0] : null;
	let CustomData = custom_data;
	if (typeof custom_data === "string") {
		CustomData = JSON.parse(custom_data);
	}
	const hasStatus = type === "goal" || type === "failed_call";
	const hasHttpCall = type === "failed_call";
	const isJSError = type === "js_error";
	const isPageView = type === "page_view";
	return (
		<TimeLineBlockExpandedContainer>
			<EssentialInfoBlockRow>
				{hasStatus && (
					<>
						<EssentialInfoBlock>
							<p>Status Code</p>
							<p>{status ?? "No Info"}</p>
						</EssentialInfoBlock>
						<EssentialInfoBlock>
							<p>Method</p>
							<p>{method ?? "No Info"}</p>
						</EssentialInfoBlock>
						<EssentialInfoBlock>
							<p>Duration</p>
							<p>{durationStr ?? "No Info"}</p>
						</EssentialInfoBlock>
					</>
				)}
				{isJSError && (
					<>
						<EssentialInfoBlock>
							<p>Script Domain</p>
							<p>{scriptDomain ?? "No Info"}</p>
						</EssentialInfoBlock>
						<EssentialInfoBlock>
							<p>Script Path</p>
							<p>{scriptPath ?? "No Info"}</p>
						</EssentialInfoBlock>
					</>
				)}
				{isPageView ? (
					<ExpandedErrorBlock>
						<p>Page URL</p>
						<ExpandedText>
							<p>{pageUrl}</p>
						</ExpandedText>
					</ExpandedErrorBlock>
				) : null}
			</EssentialInfoBlockRow>

			{hasHttpCall ? (
				<ExpandedErrorBlock>
					<p>HTTP Request</p>
					<ExpandedText>
						<p>{httpRequest}</p>
					</ExpandedText>
				</ExpandedErrorBlock>
			) : null}
			{isError && errorMessage ? (
				<ExpandedErrorBlock>
					<p>Error Message</p>
					<ExpandedTextBoard>{errorMessage}</ExpandedTextBoard>
				</ExpandedErrorBlock>
			) : null}
			{CustomData ? (
				<MiniListBlock>
					<p>Custom Data</p>
					<MiniList>
						{CustomData.map(({ definitionName, value }, i) => (
							<MiniListItem key={`${i}-mini-list`}>
								<p>{definitionName}:</p>
								<p>{value}</p>
							</MiniListItem>
						))}
					</MiniList>
				</MiniListBlock>
			) : null}
		</TimeLineBlockExpandedContainer>
	);
};

export { TimeLineBlockExpanded };

import styled from "@emotion/styled";

const TimeLineBlockContainer = styled.div`
	width: 100%;
	height: fit-content;
`;

const TimeLineExpandedList = styled.div<{ expanded: boolean }>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: ${({ theme }) => theme.helpers.clamp(6, 16, 1000, 1920)};
	gap: ${({ theme }) => theme.helpers.clamp(10, 16, 1000, 1920)};
	width: 100%;
	height: fit-content;
	background: #f5f5f5;
	border-width: 0px 1px 1px 1px;
	border-style: solid;
	border-color: var(--Seperation);
	border-radius: 0px 0px 8px 8px;
	display: ${({ expanded }) => (expanded ? "flex" : "none")};
	@media only screen and (max-width: 1000px) {
		padding: ${({ theme }) => theme.helpers.clamp(6, 16, 260, 1000)};
		gap: ${({ theme }) => theme.helpers.clamp(10, 16, 260, 1000)};
	}
`;

const TimeLineExpandedGroup = styled.div`
	width: 100%;
	height: fit-content;
	box-sizing: border-box;
	gap: 16px;
	display: flex;
	flex-direction: column;
`;

const Truncate = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: ${({ theme }) => theme.helpers.clamp(80, 160, 1000, 1920)};
	@media only screen and (max-width: 1000px) {
		max-width: ${({ theme }) => theme.helpers.clamp(80, 700, 260, 1000)};
	}
`;

export {
	TimeLineBlockContainer,
	TimeLineExpandedList,
	TimeLineExpandedGroup,
	Truncate,
};

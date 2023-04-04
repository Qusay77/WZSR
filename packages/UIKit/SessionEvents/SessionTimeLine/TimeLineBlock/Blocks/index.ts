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
	padding: 16px;
	gap: 16px;
	width: 100%;
	height: fit-content;
	background: #f5f5f5;
	border-width: 0px 1px 1px 1px;
	border-style: solid;
	border-color: var(--Seperation);
	border-radius: 0px 0px 8px 8px;
	display: ${({ expanded }) => (expanded ? "flex" : "none")};
`;

const TimeLineExpandedGroup = styled.div`
	width: 100%;
	height: fit-content;
	box-sizing: border-box;
`;
export { TimeLineBlockContainer, TimeLineExpandedList, TimeLineExpandedGroup };

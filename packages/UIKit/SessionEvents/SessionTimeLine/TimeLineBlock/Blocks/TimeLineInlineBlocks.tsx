import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { Error, Record, StyledArrowDown, StyledArrowUp, Warning } from "../svg";

const TimeLineBlockInlineContainer = styled.div<{ expanded: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	gap: 16px;
	width: 100%;
	height: 64px;
	background-color: var(--White);
	border: 1px solid var(--Seperation);
	border-radius: ${({ expanded }) => (expanded ? "8px 8px 0px 0px" : "8px")};
`;

const TypeBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 16px;
	width: fit-content;
	height: 32px;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		text-align: justify;
		text-transform: capitalize;
		font-feature-settings: "salt" on;
		color: var(--Text-Header);
	}
`;

const InfoBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 16px;
	width: fit-content;
	height: 24px;
`;
const TextSeparator = styled.div`
	width: 1px;
	height: 24px;
	border: 1px solid var(--Seperation);
`;

const DurationAndErrorsBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 8px;
	width: fit-content;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		display: flex;
		align-items: center;
		text-align: center;
		color: var(--Text-Body);
	}
`;

const TimeLineBlockInline = ({
	expanded,
	setExpand,
}: {
	expanded: boolean;
	setExpand: Dispatch<SetStateAction<boolean>>;
}) => {
	const onExpandClick = () => {
		setExpand((prev) => !prev);
	};
	return (
		<TimeLineBlockInlineContainer expanded={expanded}>
			<TypeBlock>
				<Record />
				<p>Page Name</p>
			</TypeBlock>
			<InfoBlock>
				<DurationAndErrorsBlock>
					<Error />
					<Warning />
					<p>00:00</p>
				</DurationAndErrorsBlock>
				<TextSeparator />
				{expanded ? (
					<StyledArrowUp onClick={onExpandClick} />
				) : (
					<StyledArrowDown onClick={onExpandClick} />
				)}
			</InfoBlock>
		</TimeLineBlockInlineContainer>
	);
};

export { TimeLineBlockInline };

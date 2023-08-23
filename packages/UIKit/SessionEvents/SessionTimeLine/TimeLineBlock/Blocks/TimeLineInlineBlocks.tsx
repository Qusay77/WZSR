import styled from "@emotion/styled";
import moment from "moment";
import { usePlayer } from "packages/rrweb";
import { Dispatch, SetStateAction } from "react";
import { Truncate } from ".";
import {
	StyledRecord,
	StyledArrowDown,
	StyledArrowUp,
	JSError,
	FailedCall,
	FailedGoal,
} from "../svg";

const TimeLineBlockInlineContainer = styled.div<{ expanded: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.helpers.clamp(10, 16, 1000, 1920)};
	gap: ${({ theme }) => theme.helpers.clamp(10, 16, 1000, 1920)};
	width: 100%;
	height: ${({ theme }) => theme.helpers.clamp(40, 64, 1000, 1920)};
	background-color: var(--White);
	border: 1px solid var(--Seperation);
	border-radius: ${({ expanded }) => (expanded ? "8px 8px 0px 0px" : "8px")};
	@media only screen and (max-width: 1000px) {
		padding: ${({ theme }) => theme.helpers.clamp(10, 16, 260, 1000)};
		gap: ${({ theme }) => theme.helpers.clamp(10, 16, 260, 1000)};
		height: ${({ theme }) => theme.helpers.clamp(40, 64, 260, 1000)};
	}
	cursor: pointer;
`;

const TypeBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: ${({ theme }) => theme.helpers.clamp(10, 16, 1000, 1920)};
	width: fit-content;
	height: 32px;
	> svg {
		width: ${({ theme }) => theme.helpers.clamp(24, 32, 1000, 1920)};
	}
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 16, 1000, 1920)};
		line-height: 19px;
		white-space: nowrap;
		text-align: justify;
		text-transform: capitalize;
		font-feature-settings: "salt" on;
		color: var(--Text-Header);
	}
	@media only screen and (max-width: 1000px) {
		gap: ${({ theme }) => theme.helpers.clamp(10, 16, 260, 1000)};
		> svg {
			width: ${({ theme }) => theme.helpers.clamp(24, 32, 260, 1000)};
		}
		> p {
			font-size: ${({ theme }) => theme.helpers.clamp(12, 16, 260, 1000)};
		}
	}
`;

const InfoBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: ${({ theme }) => theme.helpers.clamp(8, 16, 1000, 1920)};
	width: fit-content;
	height: 24px;
	> svg {
		width: ${({ theme }) => theme.helpers.clamp(18, 24, 1000, 1920)};
	}
	@media only screen and (max-width: 1000px) {
		gap: ${({ theme }) => theme.helpers.clamp(8, 16, 260, 1000)};
		> svg {
			width: ${({ theme }) => theme.helpers.clamp(8, 24, 260, 1000)};
		}
	}
`;
const TextSeparator = styled.div`
	width: 1px;
	height: ${({ theme }) => theme.helpers.clamp(18, 24, 1000, 1920)};
	border: 1px solid var(--Seperation);
	@media only screen and (max-width: 1000px) {
		height: ${({ theme }) => theme.helpers.clamp(18, 24, 260, 1000)};
	}
`;

const DurationAndErrorsBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: ${({ theme }) => theme.helpers.clamp(1, 8, 1000, 1920)};
	width: fit-content;
	> svg {
		width: ${({ theme }) => theme.helpers.clamp(18, 24, 1000, 1920)};
	}
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		line-height: 17px;
		white-space: nowrap;
		display: flex;
		align-items: center;
		text-align: center;
		color: var(--Text-Body);
	}

	@media only screen and (max-width: 1000px) {
		gap: ${({ theme }) => theme.helpers.clamp(1, 8, 260, 1000)};
		> svg {
			width: ${({ theme }) => theme.helpers.clamp(18, 24, 260, 1000)};
		}
		> p {
			font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 260, 1000)};
		}
	}
`;

const TimeLineBlockInline = ({
	expanded,
	setExpand,
	name,
	isError,
	type,
	hasErrors,
	startTime = 0,
}: {
	expanded: boolean;
	setExpand: Dispatch<SetStateAction<boolean>>;
	name?: string;
	isError?: boolean;
	type?: string;
	startTime?: number;
	hasErrors?: Array<string | undefined>;
}) => {
	const onExpandClick = () => {
		setExpand((prev) => !prev);
	};
	// ?
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// const durationStr = duration ? duration?.split(".")[0] : null;
	const formattedTime = startTime
		? moment.utc(startTime > 0 ? startTime : 1).format("mm:ss")
		: "-:--";
	const timeMS = formattedTime
		.split(":")
		.reduce(
			(acc, val, i) =>
				acc + (i === 0 ? parseInt(val) * 60000 : parseInt(val) * 1000),
			0,
		);

	const time = formattedTime;
	const hasJsError =
		hasErrors?.find((e) => e === "js_error") ||
		(isError && type === "js_error");
	const isFailedCall =
		hasErrors?.find((e) => e === "failed_call") ||
		(isError && type === "failed_call");
	const hasOtherErrors =
		hasErrors?.find((e) => e === "page_view" || e === "goal") ||
		(isError && (type === "page_view" || type === "goal"));
	const { PlayerInstance, play } = usePlayer(true);

	return (
		<TimeLineBlockInlineContainer onClick={onExpandClick} expanded={expanded}>
			<TypeBlock>
				<StyledRecord
					onClick={(e) => {
						e.stopPropagation();
						// eslint-disable-next-line no-console
						console.log(timeMS);
						if (startTime) {
							PlayerInstance?.goto(timeMS > 0 ? timeMS : 1, play);
						}
					}}
				/>
				<Truncate>{name}</Truncate>
			</TypeBlock>
			<InfoBlock>
				<DurationAndErrorsBlock>
					{hasJsError ? <JSError /> : ""}
					{hasOtherErrors ? <FailedGoal /> : ""}
					{isFailedCall ? <FailedCall /> : ""}

					<p>{time}</p>
				</DurationAndErrorsBlock>
				<TextSeparator />
				{expanded ? <StyledArrowUp /> : <StyledArrowDown />}
			</InfoBlock>
		</TimeLineBlockInlineContainer>
	);
};

export { TimeLineBlockInline };

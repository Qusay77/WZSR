import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { Error, Record, StyledArrowDown, StyledArrowUp, Warning } from "../svg";

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

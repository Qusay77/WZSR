import {
	Calendar,
	Chrome,
	Copy,
	Mobile,
	Referrer,
	User,
	Desktop,
	Tablet,
} from "../svg";
import { CircleFlag } from "react-circle-flags";
import { countries } from "./countries";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styled from "@emotion/styled";
import { BrowserType, DevicesTypes, ValueType } from "./types";
import { TextSeparator, Truncate } from ".";
import { copyToClipboard } from "packages/utils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { GenerateSessionAnalyticsURl } from "packages/utils/SAHelpers";
const Devices: DevicesTypes = {
	Mobile,
	Desktop,
	Tablet,
};
const StyledCopy = styled(Copy)`
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
`;
const StyledTooltip = styled(Tooltip)`
	background-color: var(--White);
	color: var(--Text-Body);
	border: 1px solid var(--Seperation);
	box-shadow: 0px 8px 40px rgba(124, 124, 124, 0.1);
	border-radius: 8px;
	font-weight: 400;
	font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
	line-height: 17px;
	display: inline;
	p {
		display: inline;
		font-weight: 600;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
	}
`;
const SessionTimeBlock = ({ value }: ValueType) => {
	const dateTime = value?.split(" ");
	const time = dateTime[1].split(".")?.[0];
	return (
		<div>
			<Calendar />
			<span>
				{dateTime[0]} <TextSeparator /> {time}
			</span>
		</div>
	);
};

const DeviceBlock = ({ value }: ValueType) => {
	const Icon = Devices[value as keyof DevicesTypes];
	return (
		<div>
			<Icon />
			<span>{value}</span>
		</div>
	);
};

const LocationBlock = ({ value }: ValueType) => {
	return (
		<div>
			<CircleFlag
				height={20}
				countryCode={countries[value]?.toLocaleLowerCase()}
			/>
			<span>{value}</span>
		</div>
	);
};
const BrowserBlock = ({ value }: { value: BrowserType }) => {
	const { USERBROWSER, USERBROWSERVERSION } = value;
	return (
		<div>
			<Chrome />
			<span>
				{USERBROWSER} {USERBROWSERVERSION}
			</span>
		</div>
	);
};

const UserIdBlock = ({ value }: ValueType) => {
	const { details } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const SALink = GenerateSessionAnalyticsURl(details?.USERID || "");
	const url = `https://portal.webeyez.com/sessions/analytic?${SALink}`;
	return (
		<div>
			<User />
			<StyledTooltip id="#userIdCopy">
				View <p>n</p> User sessions over the <p>last 30 days</p>
			</StyledTooltip>

			<StyledTooltip id="#userId">{value}</StyledTooltip>
			<span>
				<Truncate data-tooltip-id="#userId">{value}</Truncate> <TextSeparator />
				<StyledCopy
					data-tooltip-id="#userIdCopy"
					onClick={() => {
						window.open(url, "_blank");
					}}
				/>
			</span>
		</div>
	);
};

const ReferrerBlock = ({ value }: ValueType) => {
	const [copied, setCopied] = useState(false);
	const handleClick = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	return (
		<div>
			<Referrer />

			<StyledTooltip isOpen={copied} id="#referrerText">
				{copied && "Copied"}
			</StyledTooltip>
			<StyledTooltip id="#referrer" clickable>
				{value}
			</StyledTooltip>
			<span>
				<Truncate data-tooltip-id="#referrer">{value}</Truncate>
				<StyledCopy
					data-tooltip-id="#referrerText"
					onClick={() => {
						handleClick();
						copyToClipboard(value);
					}}
				/>
			</span>
		</div>
	);
};

export {
	SessionTimeBlock,
	DeviceBlock,
	LocationBlock,
	BrowserBlock,
	UserIdBlock,
	ReferrerBlock,
};

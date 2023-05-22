import {
	Calendar,
	Chrome,
	Firefox,
	Safari,
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
import { BrowsersTypes, BrowserType, DevicesTypes, ValueType } from "./types";
import { TextSeparator, Truncate } from ".";
import { copyToClipboard } from "packages/utils";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { GenerateSessionAnalyticsURl } from "packages/utils/SAHelpers";
import moment from "moment";
const Devices: DevicesTypes = {
	Mobile,
	Desktop,
	Tablet,
};
const Browsers: BrowsersTypes = {
	Chrome,
	Firefox,
	Safari,
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
const MissingText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
	line-height: 17px;
	color: var(--Text-Secondary);
	line-height: 17px;
`;

const SessionTimeBlock = ({ value }: ValueType) => {
	const dateTime = moment(value);

	const formattedDate = dateTime.format("YYYY-MM-DD");
	const formattedTime = dateTime.format("HH:mm:ss");
	return (
		<div>
			{value ? (
				<>
					<Calendar />
					<span>
						{formattedDate ?? ""} <TextSeparator /> {formattedTime ?? ""}
					</span>
				</>
			) : (
				<MissingText>Date Missing</MissingText>
			)}
		</div>
	);
};

const DeviceBlock = ({ value }: ValueType) => {
	const Icon = Devices[value as keyof DevicesTypes];
	return (
		<div>
			{value ? (
				<>
					<Icon />
					<span>{value}</span>
				</>
			) : (
				<MissingText>Device Missing</MissingText>
			)}
		</div>
	);
};

const LocationBlock = ({ value }: ValueType) => {
	return (
		<div>
			{value ? (
				<>
					<CircleFlag
						height={20}
						countryCode={countries[value]?.toLocaleLowerCase()}
					/>
					<span>{value}</span>
				</>
			) : (
				<MissingText>Location Missing</MissingText>
			)}
		</div>
	);
};
const BrowserBlock = ({ value }: { value: BrowserType }) => {
	const { userBrowser, userBrowserVersion } = value;
	const Icon = Browsers[userBrowser as keyof BrowsersTypes];
	return (
		<div>
			{userBrowser ? <Icon /> : null}
			{userBrowser && userBrowserVersion ? (
				<span>
					{userBrowser ?? <MissingText>Browser Unknown</MissingText>}{" "}
					{userBrowserVersion ?? <MissingText>Version Unknown</MissingText>}
				</span>
			) : (
				<MissingText>Device Info Missing</MissingText>
			)}
		</div>
	);
};

const UserIdBlock = ({ value }: ValueType) => {
	const { details } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const SALink = GenerateSessionAnalyticsURl(details?.userId || "");
	const url = `https://portal.webeyez.com/sessions/analytic?${SALink}`;
	return (
		<div>
			{details?.userId ? (
				<>
					<User />
					<StyledTooltip id="#userIdCopy">
						View <p>n</p> User sessions over the <p>last 30 days</p>
					</StyledTooltip>

					<StyledTooltip id="#userId">{value ?? ""}</StyledTooltip>
					<span>
						<Truncate data-tooltip-id="#userId">{value ?? ""}</Truncate>
						<TextSeparator />
						<StyledCopy
							data-tooltip-id="#userIdCopy"
							onClick={() => {
								window.open(url, "_blank");
							}}
						/>
					</span>
				</>
			) : (
				<MissingText>User Info Missing</MissingText>
			)}
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
			{value ? (
				<>
					<Referrer />
					<StyledTooltip isOpen={copied} id="#referrerText">
						{copied && "Copied"}
					</StyledTooltip>
					<StyledTooltip id="#referrer" clickable>
						{value ?? ""}
					</StyledTooltip>
					<span>
						<Truncate data-tooltip-id="#referrer">{value ?? ""}</Truncate>
						<StyledCopy
							data-tooltip-id="#referrerText"
							onClick={() => {
								handleClick();
								copyToClipboard(value);
							}}
						/>
					</span>
				</>
			) : (
				<MissingText>Referrer Info Missing</MissingText>
			)}
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

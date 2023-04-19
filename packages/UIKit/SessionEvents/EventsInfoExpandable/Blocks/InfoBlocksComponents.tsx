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
const Devices: DevicesTypes = {
	Mobile,
	Desktop,
	Tablet,
};
const StyledCopy = styled(Copy)`
	cursor: pointer;
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
	return (
		<div>
			<User />
			<Tooltip id="#userId">{value}</Tooltip>
			<span>
				<Truncate data-tooltip-id="#userId">{value}</Truncate> <TextSeparator />
				<StyledCopy onClick={() => copyToClipboard(value)} />
			</span>
		</div>
	);
};
const ReferrerBlock = ({ value }: ValueType) => {
	return (
		<div>
			<Referrer />
			<Tooltip id="#referrer" clickable>
				{value}
			</Tooltip>
			<span>
				<Truncate data-tooltip-id="#referrer">{value}</Truncate>
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

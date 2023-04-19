import { InfoBlock, InfoBlocksContainer } from ".";
import { EventsDetails } from "store/state/EventsDetails";
import { useSelector } from "react-redux";
import { ComponentProps, MatchType } from "./types";
import {
	BrowserBlock,
	DeviceBlock,
	LocationBlock,
	ReferrerBlock,
	SessionTimeBlock,
	UserIdBlock,
} from "./InfoBlocksComponents";

const InfoMap = [
	{
		label: "Session Time",
		Component: SessionTimeBlock,
	},
	{
		label: "Device",
		Component: DeviceBlock,
	},
	{
		label: "Location",
		Component: LocationBlock,
	},
	{
		label: "Browser",
		Component: BrowserBlock,
	},
	{
		label: "User ID",
		Component: UserIdBlock,
	},
	{
		label: "Referrer",
		Component: ReferrerBlock,
	},
];

const InfoBlocks = ({ showMore }: { showMore: boolean }) => {
	const { details } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const {
		COUNTRY,
		DATETIME,
		DEVICE,
		REFERRERPATH,
		USERBROWSER,
		USERID,
		USERBROWSERVERSION,
	} = details || {};
	const match: MatchType = {
		"Session Time": DATETIME,
		Device: DEVICE,
		Location: COUNTRY,
		Browser: { USERBROWSER, USERBROWSERVERSION },
		"User ID": USERID,
		Referrer: REFERRERPATH,
	};

	return (
		<InfoBlocksContainer>
			{InfoMap.map(({ label, Component }, i) =>
				showMore && i > 1 ? null : (
					<InfoBlock key={`info-block-${i}`}>
						<p>{label}</p>
						<Component value={(match[label] as keyof ComponentProps) || ""} />
					</InfoBlock>
				),
			)}
		</InfoBlocksContainer>
	);
};

export default InfoBlocks;

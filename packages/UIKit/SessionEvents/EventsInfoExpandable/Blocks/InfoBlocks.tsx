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
		label: "Referrer",
		Component: ReferrerBlock,
	},
	{
		label: "User ID",
		Component: UserIdBlock,
	},
];

const InfoBlocks = ({ showMore }: { showMore: boolean }) => {
	const { details } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const {
		country,
		dateTime,
		device,
		referrerPath,
		userBrowser,
		userId,
		userBrowserVersion,
	} = details || {};
	const match: MatchType = {
		"Session Time": dateTime,
		Device: device,
		Location: country,
		Browser: { userBrowser, userBrowserVersion },
		"User ID": userId,
		Referrer: referrerPath,
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

import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { SessionTimeLineContainer } from "./Blocks";
import TimeLineSearch from "./Blocks/SearchInputBlocks";
import SessionTimeLineHeader from "./Blocks/SessionHeaderBlocks";
import TimeLineBlock from "./TimeLineBlock";
const SessionTimeLine = () => {
	const { events, searchValue } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const filteredEvents = events.filter((f) =>
		f.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
	);
	return (
		<SessionTimeLineContainer>
			<SessionTimeLineHeader />
			<TimeLineSearch />
			{filteredEvents.map((e, i) => (
				<TimeLineBlock key={`${i}-time-line-block`} event={e} />
			))}
		</SessionTimeLineContainer>
	);
};
export default SessionTimeLine;

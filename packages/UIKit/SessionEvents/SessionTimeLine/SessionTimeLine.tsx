import { cloneDeep } from "lodash";
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
	const filteredEvents = events
		.map((f) => {
			const { name, expandPageView } = f;
			const FilteredEvent = cloneDeep(f);
			const viewNames = expandPageView.data.filter(({ name }) =>
				name?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
			);
			FilteredEvent.expandPageView.data = viewNames;

			const SurfaceNameIncluded = name
				.toLocaleLowerCase()
				.includes(searchValue.toLocaleLowerCase());
			return SurfaceNameIncluded || viewNames.length ? FilteredEvent : null;
		})
		.filter((f) => f);
	return (
		<SessionTimeLineContainer>
			<SessionTimeLineHeader />
			<TimeLineSearch />
			{filteredEvents.map(
				(e, i) => e && <TimeLineBlock key={`${i}-time-line-block`} event={e} />,
			)}
		</SessionTimeLineContainer>
	);
};
export default SessionTimeLine;

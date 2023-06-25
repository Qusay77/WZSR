import { cloneDeep } from "lodash";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { SessionTimeLineContainer } from "./Blocks";
import TimeLineSearch from "./Blocks/SearchInputBlocks";
import SessionTimeLineHeader from "./Blocks/SessionHeaderBlocks";
import TimeLineBlock from "./TimeLineBlock";
import { GroupType } from "./TimeLineBlock/types";
const SessionTimeLine = () => {
	const { events, searchValue } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);

	const SearchCriteria = [
		"error_message",
		"method",
		"status",
		"name",
		"custom_data",
		"script_domain",
		"script_path",
		"http_request",
		"page_url",
	];
	const filteredEvents = events
		.map((f) => {
			const FilteredEvent = cloneDeep(f);

			const { name, expandPageView } = FilteredEvent;
			const { data } = expandPageView;
			const viewNames = data.filter((obj: GroupType) => {
				const FilteredData = cloneDeep(obj);

				if (FilteredData.custom_data) {
					const parsed = JSON.parse(FilteredData.custom_data as string);

					FilteredData.custom_data = parsed
						.map((p: { [key: string]: string }) => Object.values(p))
						?.flat()
						?.join("®");
				}
				const matches = Object.keys(FilteredData).some((key) => {
					return (
						SearchCriteria.includes(key) &&
						FilteredData[key]
							?.toString()
							?.toLowerCase()
							?.includes(searchValue.toLocaleLowerCase())
					);
				});
				return matches;
			});

			FilteredEvent.expandPageView.data = viewNames;

			const SurfaceNameIncluded = name
				?.toLocaleLowerCase()
				?.includes(searchValue.toLocaleLowerCase());
			return SurfaceNameIncluded || viewNames.length ? FilteredEvent : null;
		})
		.filter((f) => f);
	return (
		<SessionTimeLineContainer>
			<SessionTimeLineHeader />
			<TimeLineSearch />
			{filteredEvents.map(
				(e, i) =>
					e && (
						<TimeLineBlock
							expandOnSearch={i === 0 && !!searchValue.length}
							key={`${i}-time-line-block`}
							event={e}
						/>
					),
			)}
		</SessionTimeLineContainer>
	);
};
export default SessionTimeLine;

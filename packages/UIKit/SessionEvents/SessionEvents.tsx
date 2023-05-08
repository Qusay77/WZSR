import { ContentContainer, SessionEventsContainer } from "./Blocks";
import EventsInfoExpandable from "./EventsInfoExpandable";
import SessionTimeLine from "./SessionTimeLine";
import SRHeader from "./SRHeader";
import { useFetchSessionDetailsQuery } from "src/services/details";
const SessionEvents = () => {
	useFetchSessionDetailsQuery({
		orgId: 769,
		sessionId: 1447895985699487700,
	});

	return (
		<SessionEventsContainer>
			<SRHeader />
			<ContentContainer>
				<EventsInfoExpandable />
				<SessionTimeLine />
			</ContentContainer>
		</SessionEventsContainer>
	);
};

export default SessionEvents;

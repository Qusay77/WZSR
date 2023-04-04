import { ContentContainer, SessionEventsContainer } from "./Blocks";
import EventsInfoExpandable from "./EventsInfoExpandable";
import SessionTimeLine from "./SessionTimeLine";
import SRHeader from "./SRHeader";

const SessionEvents = () => {
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

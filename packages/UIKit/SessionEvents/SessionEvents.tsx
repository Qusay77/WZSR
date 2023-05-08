import { ContentContainer, SessionEventsContainer } from "./Blocks";
import EventsInfoExpandable from "./EventsInfoExpandable";
import SessionTimeLine from "./SessionTimeLine";
import SRHeader from "./SRHeader";
import { useFetchSessionDetailsQuery } from "src/services/details";
const SessionEvents = () => {
	useFetchSessionDetailsQuery({
		orgId: 645,
		sessionId: 4871628925818847000,
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

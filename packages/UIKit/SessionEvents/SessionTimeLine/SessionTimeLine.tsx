import { SessionTimeLineContainer } from "./Blocks";
import TimeLineSearch from "./Blocks/SearchInputBlocks";
import SessionTimeLineHeader from "./Blocks/SessionHeaderBlocks";
import TimeLineBlock from "./TimeLineBlock";
const SessionTimeLine = () => {
	return (
		<SessionTimeLineContainer>
			<SessionTimeLineHeader />
			<TimeLineSearch />
			<TimeLineBlock />
		</SessionTimeLineContainer>
	);
};
export default SessionTimeLine;

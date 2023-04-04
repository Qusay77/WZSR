import { useState } from "react";
import {
	TimeLineBlockContainer,
	TimeLineExpandedGroup,
	TimeLineExpandedList,
} from "./Blocks";
import { TimeLineBlockExpanded } from "./Blocks/TimeLineExpandedBlocks";
import { TimeLineBlockInline } from "./Blocks/TimeLineInlineBlocks";

const TimeLineGroup = () => {
	const [expanded, setExpand] = useState(false);

	return (
		<TimeLineExpandedGroup>
			<TimeLineBlockInline setExpand={setExpand} expanded={expanded} />
			{expanded ? <TimeLineBlockExpanded /> : null}
		</TimeLineExpandedGroup>
	);
};

const TimeLineBlock = () => {
	const [expanded, setExpand] = useState(false);
	return (
		<TimeLineBlockContainer>
			<TimeLineBlockInline setExpand={setExpand} expanded={expanded} />
			<TimeLineExpandedList expanded={expanded}>
				<TimeLineGroup />
			</TimeLineExpandedList>
		</TimeLineBlockContainer>
	);
};

export default TimeLineBlock;

import { useState } from "react";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import {
	TimeLineBlockContainer,
	TimeLineExpandedGroup,
	TimeLineExpandedList,
} from "./Blocks";
import { TimeLineBlockExpanded } from "./Blocks/TimeLineExpandedBlocks";
import { TimeLineBlockInline } from "./Blocks/TimeLineInlineBlocks";
import { GroupType } from "./types";

const GroupItem = ({ groupItem }: { groupItem: GroupType }) => {
	const [expanded, setExpand] = useState(false);

	const { isError, name, type, duration, method, status, custom_data } =
		groupItem;

	return (
		<TimeLineBlockContainer>
			<TimeLineBlockInline
				name={name}
				duration={duration}
				setExpand={setExpand}
				expanded={expanded}
				isError={isError}
				type={type}
			/>
			{expanded ? (
				<TimeLineBlockExpanded
					method={method}
					status={status}
					duration={duration}
					custom_data={custom_data}
				/>
			) : null}
		</TimeLineBlockContainer>
	);
};

const TimeLineGroup = ({ group }: { group: Array<GroupType> }) => {
	return (
		<TimeLineExpandedGroup>
			{group.map((g, i) => (
				<GroupItem groupItem={g} key={`${i}-group-item`} />
			))}
		</TimeLineExpandedGroup>
	);
};

const TimeLineBlock = ({
	event,
}: {
	event: {
		duration: string;
		name: string;
		expandPageView: { data: Array<GroupType> };
	};
}) => {
	const [expanded, setExpand] = useState(false);
	const { name, duration, expandPageView } = event;
	const { data } = expandPageView;
	const hasErrors = data.filter((e) => e.isError).map((e) => e.type);

	const { errorsOnly } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const render = errorsOnly ? !hasErrors.length : false;
	return (
		<TimeLineBlockContainer render={render}>
			<TimeLineBlockInline
				name={name}
				duration={duration}
				setExpand={setExpand}
				expanded={expanded}
				hasErrors={hasErrors}
			/>
			<TimeLineExpandedList expanded={expanded}>
				{expanded ? <TimeLineGroup group={data} /> : null}
			</TimeLineExpandedList>
		</TimeLineBlockContainer>
	);
};

export default TimeLineBlock;

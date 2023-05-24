import { useEffect, useState } from "react";
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
import moment from "moment-timezone";
const GroupItem = ({
	groupItem,
	expandOnSearch,
}: {
	expandOnSearch: boolean;
	groupItem: GroupType;
}) => {
	const [expanded, setExpand] = useState(false);

	const {
		isError,
		name,
		type,
		duration,
		method,
		status,
		custom_data,
		error_message,
	} = groupItem;
	useEffect(() => {
		setExpand(expandOnSearch);
	}, [expandOnSearch]);
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
					custom_data={
						custom_data as { definitionName: string; value: string }[]
					}
					isError={isError}
					errorMessage={error_message}
				/>
			) : null}
		</TimeLineBlockContainer>
	);
};

const TimeLineGroup = ({
	group,
	expandOnSearch,
}: {
	expandOnSearch: boolean;
	group: Array<GroupType>;
}) => {
	return (
		<TimeLineExpandedGroup>
			{group.map((g, i) => (
				<GroupItem
					expandOnSearch={expandOnSearch && i === 0}
					groupItem={g}
					key={`${i}-group-item`}
				/>
			))}
		</TimeLineExpandedGroup>
	);
};

const TimeLineBlock = ({
	event,
	expandOnSearch,
}: {
	event: {
		duration: string;
		name: string;
		expandPageView: {
			entryTime: string;
			data: Array<GroupType>;
		};
	};
	expandOnSearch: boolean;
}) => {
	const [expanded, setExpand] = useState(false);
	const { name, duration, expandPageView } = event;
	const { data, entryTime } = expandPageView;
	const hasErrors = data.filter((e) => e.isError).map((e) => e.type);

	const { errorsOnly, details } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const render = errorsOnly ? !hasErrors.length : false;
	const format = "YYYY-MM-DD HH:mm:ss.SSS Z";
	const entry = moment(entryTime, format);
	const start = moment(details?.dateTime, format);

	const entryMS = entry.valueOf();
	const startMS = start.valueOf();
	useEffect(() => {
		setExpand(expandOnSearch);
	}, [expandOnSearch]);
	return !render ? (
		<TimeLineBlockContainer>
			<TimeLineBlockInline
				name={name}
				duration={duration}
				setExpand={setExpand}
				expanded={expanded}
				hasErrors={hasErrors}
				skipTo={entryMS - startMS}
			/>
			<TimeLineExpandedList expanded={expanded}>
				{expanded ? (
					<TimeLineGroup expandOnSearch={expandOnSearch} group={data} />
				) : null}
			</TimeLineExpandedList>
		</TimeLineBlockContainer>
	) : null;
};

export default TimeLineBlock;

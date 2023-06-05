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
		script_domain,
		script_path,
		http_request,
		page_url,
		timeStamp,
	} = groupItem;
	useEffect(() => {
		setExpand(expandOnSearch);
	}, [expandOnSearch]);
	const { details } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const format = "YYYY-MM-DD HH:mm:ss.SSS Z";
	const entry = moment(timeStamp, format);
	const start = moment(details?.DATETIME, format);

	const entryMS = entry.valueOf();
	const startMS = start.valueOf();
	return (
		<TimeLineBlockContainer>
			<TimeLineBlockInline
				name={name}
				duration={duration}
				startTime={entryMS - startMS}
				setExpand={setExpand}
				expanded={expanded}
				isError={isError}
				type={type}
				skipTo={entryMS - startMS}
			/>
			{expanded ? (
				<TimeLineBlockExpanded
					method={method}
					status={status}
					duration={duration}
					scriptDomain={script_domain}
					scriptPath={script_path}
					httpRequest={http_request}
					type={type}
					pageUrl={page_url}
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
	filterErrors,
}: {
	expandOnSearch: boolean;
	filterErrors: boolean;
	group: Array<GroupType>;
}) => {
	return (
		<TimeLineExpandedGroup>
			{group.map((g, i) => {
				if (filterErrors) {
					return g.isError ? (
						<GroupItem
							expandOnSearch={expandOnSearch && i === 0}
							groupItem={g}
							key={`${i}-group-item`}
						/>
					) : null;
				}
				return (
					<GroupItem
						expandOnSearch={expandOnSearch && i === 0}
						groupItem={g}
						key={`${i}-group-item`}
					/>
				);
			})}
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
	const start = moment(details?.DATETIME, format);

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
				startTime={entryMS - startMS}
				setExpand={setExpand}
				expanded={expanded}
				hasErrors={hasErrors}
				skipTo={entryMS - startMS}
			/>
			<TimeLineExpandedList expanded={expanded}>
				{expanded ? (
					<TimeLineGroup
						filterErrors={errorsOnly && !!hasErrors.length}
						expandOnSearch={expandOnSearch}
						group={data}
					/>
				) : null}
			</TimeLineExpandedList>
		</TimeLineBlockContainer>
	) : null;
};

export default TimeLineBlock;

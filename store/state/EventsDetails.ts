import DetailsAPi from "src/services/details";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GroupType } from "packages/UIKit/SessionEvents/SessionTimeLine/TimeLineBlock/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DetailsSSType = {
	country: string;
	dateTime: string;
	device: string;
	referrerPath: string;
	userBrowser: string;
	userId: string;
	userBrowserVersion: string;
};
type DetailsSFType = {
	COUNTRY: string;
	DATETIME: string;
	USERDATETIME: string;
	DEVICE: string;
	REFERRERPATH: string;
	USERBROWSER: string;
	USERID: string;
	USERBROWSERVERSION: string;
	isError: boolean;
};
interface EventsDetails {
	events: Array<{
		duration: string;
		name: string;
		expandPageView: { entryTime: string; data: Array<GroupType> };
	}>;
	details: DetailsSFType | null;
	replayUrl: string | null;
	errorsOnly: boolean;
	searchValue: string;
	attachedError?: string | null;
}
const initialState = {
	events: [],
	details: null,
	errorsOnly: false,
	searchValue: "",
	replayUrl: null,
	attachedError: null,
} as EventsDetails;
const EventDetailsSlice = createSlice({
	name: "EventsState",
	initialState,
	reducers: {
		setEvents(
			state,
			action: PayloadAction<{
				sessionDetails: EventsDetails["details"];
				data: EventsDetails["events"];
			}>,
		) {
			const { sessionDetails, data } = action.payload;
			state.events = data;
			state.details = sessionDetails;
		},
		setIsErrorsOnly(state) {
			state.errorsOnly = !state.errorsOnly;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			DetailsAPi.endpoints.fetchSessionDetails.matchFulfilled,
			(state, action) => {
				const { sessionDetails, data, recordingFile, error } = action.payload;
				state.events = data;
				state.details = sessionDetails;
				state.replayUrl = recordingFile;
				state.attachedError = error;
			},
		);
	},
});
export type { EventsDetails };
export const { setEvents, setIsErrorsOnly, setSearchValue } =
	EventDetailsSlice.actions;
export default EventDetailsSlice;

import DetailsAPi from "src/services/details";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GroupType } from "packages/UIKit/SessionEvents/SessionTimeLine/TimeLineBlock/types";

interface EventsDetails {
	events: Array<{
		duration: string;
		name: string;
		expandPageView: { entryTime: string; data: Array<GroupType> };
	}>;
	details: {
		country: string;
		dateTime: string;
		device: string;
		referrerPath: string;
		userBrowser: string;
		userId: string;
		userBrowserVersion: string;
	} | null;
	replayUrl: string | null;
	errorsOnly: boolean;
	searchValue: string;
}
const initialState = {
	events: [],
	details: null,
	errorsOnly: false,
	searchValue: "",
	replayUrl: null,
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
				const { sessionDetails, data, recordingFile } = action.payload;
				state.events = data;
				state.details = sessionDetails;
				state.replayUrl = recordingFile;
			},
		);
	},
});
export type { EventsDetails };
export const { setEvents, setIsErrorsOnly, setSearchValue } =
	EventDetailsSlice.actions;
export default EventDetailsSlice;

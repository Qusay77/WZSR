import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import mock from "src/services/details";
import { GroupType } from "packages/UIKit/SessionEvents/SessionTimeLine/TimeLineBlock/types";
interface EventsDetails {
	events: Array<{
		duration: string;
		name: string;
		expandPageView: { data: Array<GroupType> };
	}>;
	details: {
		COUNTRY: string;
		DATETIME: string;
		DEVICE: string;
		REFERRERPATH: string;
		USERBROWSER: string;
		USERID: string;
		USERBROWSERVERSION: string;
	} | null;
	errorsOnly: boolean;
}
const initialState = {
	events: mock.data || [],
	details: mock.sessionDetails || null,
	errorsOnly: false,
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
	},
});
export type { EventsDetails };
export const { setEvents, setIsErrorsOnly } = EventDetailsSlice.actions;
export default EventDetailsSlice;
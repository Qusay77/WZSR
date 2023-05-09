import type { PayloadAction } from "@reduxjs/toolkit";
import { GroupType } from "packages/UIKit/SessionEvents/SessionTimeLine/TimeLineBlock/types";
interface EventsDetails {
    events: Array<{
        duration: string;
        name: string;
        expandPageView: {
            data: Array<GroupType>;
        };
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
    searchValue: string;
}
declare const EventDetailsSlice: import("@reduxjs/toolkit").Slice<EventsDetails, {
    setEvents(state: import("immer/dist/internal").WritableDraft<EventsDetails>, action: {
        payload: {
            sessionDetails: EventsDetails["details"];
            data: EventsDetails["events"];
        };
        type: string;
    }): void;
    setIsErrorsOnly(state: import("immer/dist/internal").WritableDraft<EventsDetails>): void;
    setSearchValue(state: import("immer/dist/internal").WritableDraft<EventsDetails>, action: PayloadAction<string>): void;
}, "EventsState">;
export type { EventsDetails };
export declare const setEvents: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    sessionDetails: EventsDetails["details"];
    data: EventsDetails["events"];
}, "EventsState/setEvents">, setIsErrorsOnly: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"EventsState/setIsErrorsOnly">, setSearchValue: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "EventsState/setSearchValue">;
export default EventDetailsSlice;

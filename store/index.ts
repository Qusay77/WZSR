import { configureStore } from "@reduxjs/toolkit";
import RecordApi from "src/services/record";
import EventDetailState from "./state/EventsDetails";
import PlayerStore from "./state/PlayerStore";
const middleware = [RecordApi.middleware];
export const store = configureStore({
	reducer: {
		[RecordApi.reducerPath]: RecordApi.reducer,
		[PlayerStore.name]: PlayerStore.reducer,
		[EventDetailState.name]: EventDetailState.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});

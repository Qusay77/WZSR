import { configureStore } from "@reduxjs/toolkit";
import RecordApi from "src/services/record";
import DetailsAPi from "src/services/details";
import EventDetailState from "./state/EventsDetails";
import PlayerStore from "./state/PlayerStore";
const middleware = [RecordApi.middleware, DetailsAPi.middleware];
export const store = configureStore({
	reducer: {
		[RecordApi.reducerPath]: RecordApi.reducer,
		[DetailsAPi.reducerPath]: DetailsAPi.reducer,
		[PlayerStore.name]: PlayerStore.reducer,
		[EventDetailState.name]: EventDetailState.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});

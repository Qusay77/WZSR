import { configureStore } from "@reduxjs/toolkit";
import RecordApi from "src/services/record";
import PlayerStore from "./state/PlayerStore";
const middleware = [RecordApi.middleware];
export const store = configureStore({
	reducer: {
		[RecordApi.reducerPath]: RecordApi.reducer,
		[PlayerStore.name]: PlayerStore.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});

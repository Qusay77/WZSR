import { configureStore } from "@reduxjs/toolkit";
import PlayerStore from "./PlayerStore";

const middleware = [];
export const store = configureStore({
	reducer: { [PlayerStore.name]: PlayerStore.reducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});

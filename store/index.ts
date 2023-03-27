import { configureStore } from "@reduxjs/toolkit";

const middleware = [];
export const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

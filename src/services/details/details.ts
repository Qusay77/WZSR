import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryController } from "src/Globals/baseQueryController";

const api = createApi({
	reducerPath: "detailsApi",
	tagTypes: [],
	baseQuery: baseQueryController,
	endpoints: (builder) => ({
		fetchSessionDetails: builder.query({
			query: (params) => {
				const { orgId, sessionId, sessionDate } = params || {};
				return `${
					import.meta.env.VITE_APP_API_KEY
				}v3/sr/sessions/${orgId}/${sessionId}?sessionDate=${sessionDate}`;
			},
		}),
	}),
});

export const { useFetchSessionDetailsQuery } = api;
export default api;

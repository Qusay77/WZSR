import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryController } from "src/Globals/baseQueryController";

const api = createApi({
	reducerPath: "detailsApi",
	tagTypes: [],
	baseQuery: baseQueryController,
	endpoints: (builder) => ({
		fetchSessionDetails: builder.query({
			query: (params) => {
				const { orgId, sessionId } = params || {};
				return `${
					import.meta.env.VITE_APP_API_KEY
				}v2/sr/sessions/${orgId}/${sessionId}`;
			},
		}),
	}),
});

export const { useFetchSessionDetailsQuery } = api;
export default api;

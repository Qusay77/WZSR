import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseQueryController: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const customHeaders = {
		"Content-Type": "application/json",
	};

	const result = await fetchBaseQuery({
		...extraOptions,
		headers: customHeaders,
		baseUrl: "/",
	})(args, api, extraOptions);

	if (result.error) {
		// eslint-disable-next-line no-console
		console.error("Request failed:", result.error);
	}

	return result;
};

export { baseQueryController };

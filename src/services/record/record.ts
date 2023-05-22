import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
const processStream = async (stream: ReadableStream<Uint8Array> | null) => {
	const reader = stream?.getReader();
	let res = "";
	let json: Array<{ [key: string]: string }> = [];
	const decoder = new TextDecoder("utf-8");
	while (reader) {
		const { done, value } = (await reader.read()) || {};

		if (done) {
			json = JSON.parse(res.replace(/\]\[/g, ","));
			// eslint-disable-next-line no-console
			console.log(json);
			break;
		}

		if (value && value instanceof Uint8Array) {
			const chunk = decoder.decode(value, { stream: true });
			res += chunk;
		}
	}

	return json;
};

const customBaseQuery: BaseQueryFn = async (args) => {
	try {
		const response = await fetch(args);

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}
		const str = await processStream(response.body);
		return {
			data: str,
			status: response.status,
			headers: response.headers,
		};
	} catch (error) {
		return {
			error: {
				status: "unknown",
				data: {
					message: "Request handling error",
					details: error.message,
				},
			},
		};
	}
};

const api = createApi({
	reducerPath: "replayApi",
	tagTypes: [],
	baseQuery: customBaseQuery,
	endpoints: (builder) => ({
		fetchReplayFile: builder.query({
			query: (url) => url,
		}),
	}),
});

export const { useFetchReplayFileQuery, useLazyFetchReplayFileQuery } = api;
export default api;

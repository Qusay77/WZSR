import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import Pako from "pako";

const processStream = async (stream: ReadableStream<Uint8Array> | null) => {
	const reader = stream?.getReader();
	const inflater = new Pako.Inflate();

	while (reader) {
		const { done, value } = (await reader.read()) || {};

		if (done) {
			break;
		}

		if (value && value instanceof Uint8Array) {
			inflater.push(value);
		}
	}

	if (inflater.err) {
		throw new Error(`Inflate error: ${inflater.msg}`);
	}
	const deflatedResult = inflater.result;
	const deflatedString = new TextDecoder().decode(
		deflatedResult as BufferSource,
	);

	return deflatedString;
};

const customBaseQuery: BaseQueryFn = async (args) => {
	try {
		const response = await fetch(args);

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}
		const str = await processStream(response.body);
		const output = JSON.parse(`[${str.slice(0, -1)}]`);

		return {
			data: JSON.stringify(output),
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
			query: (id) => `https://sessions.webeyez.dev/public/${id}.wz`,
		}),
	}),
});

export const { useFetchReplayFileQuery } = api;
export default api;

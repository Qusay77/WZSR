import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
const processStream = async (stream: ReadableStream<Uint8Array> | null) => {
	const reader = stream?.getReader();

	let res = "";
	let json: Array<{ [key: string]: string }> = [];
	const decoder = new TextDecoder("utf-8");
	while (reader) {
		const { done, value } = (await reader.read()) || {};

		if (done) {
			json = JSON.parse(`[${res.replace(/\n/g, ",")}]`);
			break;
		}

		if (value && value instanceof Uint8Array) {
			const chunk = decoder.decode(value, { stream: true });
			res += chunk;
		}
	}
	return json.reduce(
		(a: any, c: any) => [...a, ...(c.data ? JSON.parse(c.data) : [])],
		[],
	);
};
const customBaseQuery: BaseQueryFn = async (args: Array<string>) => {
	try {
		const responseArr = await Promise.all(
			args.map(async (arg) => {
				try {
					const response = await fetch(arg);
					const str = await processStream(response.body);
					return str;
				} catch (error) {
					// eslint-disable-next-line no-console
					console.error(`Error processing arg: ${arg}`, error);
					return null; // or any other value to indicate an error
				}
			}),
		);

		return {
			data: responseArr.reduce((a, c) => [...a, ...c], []),
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

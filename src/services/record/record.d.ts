import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
declare const api: import("@reduxjs/toolkit/query/react").Api<BaseQueryFn, {
    fetchReplayFile: import("@reduxjs/toolkit/query/react").QueryDefinition<any, BaseQueryFn, never, any, "replayApi">;
}, "replayApi", never, typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useFetchReplayFileQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<any, BaseQueryFn, never, any, "replayApi">>;
export default api;

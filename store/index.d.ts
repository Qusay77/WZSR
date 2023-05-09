export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    replayApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fetchReplayFile: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn, never, any, "replayApi">;
    }, never, "replayApi">;
    detailsApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fetchSessionDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, any, "detailsApi">;
    }, never, "detailsApi">;
    PlayerState: import("./state/PlayerStore").PlayerStateTypes;
    EventsState: import("./state/EventsDetails").EventsDetails;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<{
    replayApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fetchReplayFile: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn, never, any, "replayApi">;
    }, never, "replayApi">;
    detailsApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fetchSessionDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, any, "detailsApi">;
    }, never, "detailsApi">;
    PlayerState: import("./state/PlayerStore").PlayerStateTypes;
    EventsState: import("./state/EventsDetails").EventsDetails;
}, import("redux").AnyAction>, ...(import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    fetchReplayFile: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn, never, any, "replayApi">;
}, string, "replayApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>> | import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    fetchSessionDetails: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, any, "detailsApi">;
}, string, "detailsApi">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>)[]]>>;

declare const TimeLineBlockExpanded: ({ method, status, duration, custom_data, }: {
    duration?: string | undefined;
    method?: string | undefined;
    status?: number | undefined;
    custom_data?: {
        definitionName: string;
        value: string;
    }[] | null | undefined;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
export { TimeLineBlockExpanded };

import { GroupType } from "./types";
declare const TimeLineBlock: ({ event, }: {
    event: {
        duration: string;
        name: string;
        expandPageView: {
            data: Array<GroupType>;
        };
    };
}) => import("@emotion/react/jsx-runtime").JSX.Element | null;
export default TimeLineBlock;

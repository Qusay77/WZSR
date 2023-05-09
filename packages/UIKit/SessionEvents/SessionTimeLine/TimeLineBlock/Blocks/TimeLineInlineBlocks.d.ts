import { Dispatch, SetStateAction } from "react";
declare const TimeLineBlockInline: ({ expanded, setExpand, name, duration, isError, type, hasErrors, }: {
    expanded: boolean;
    setExpand: Dispatch<SetStateAction<boolean>>;
    name?: string | undefined;
    duration?: string | undefined;
    isError?: boolean | undefined;
    type?: string | undefined;
    hasErrors?: (string | undefined)[] | undefined;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
export { TimeLineBlockInline };

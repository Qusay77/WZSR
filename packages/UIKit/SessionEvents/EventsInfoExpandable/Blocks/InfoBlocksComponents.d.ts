import { BrowserType, ValueType } from "./types";
declare const SessionTimeBlock: ({ value }: ValueType) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const DeviceBlock: ({ value }: ValueType) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const LocationBlock: ({ value }: ValueType) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const BrowserBlock: ({ value }: {
    value: BrowserType;
}) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const UserIdBlock: ({ value }: ValueType) => import("@emotion/react/jsx-runtime").JSX.Element;
declare const ReferrerBlock: ({ value }: ValueType) => import("@emotion/react/jsx-runtime").JSX.Element;
export { SessionTimeBlock, DeviceBlock, LocationBlock, BrowserBlock, UserIdBlock, ReferrerBlock, };

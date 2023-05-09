/// <reference types="react" />
type BrowserType = {
    USERBROWSER?: string;
    USERBROWSERVERSION?: string;
};
type ValueType = {
    value: string;
};
type MatchType = {
    "Session Time"?: string;
    Device?: string;
    Location?: string;
    Browser?: BrowserType;
    "User ID"?: string;
    Referrer?: string;
    [key: string]: string | undefined | BrowserType;
};
interface DevicesTypes {
    Mobile: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Desktop: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Tablet: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
type ComponentProps = {
    BrowserType: BrowserType;
    ValueType: ValueType;
};
export type { BrowserType, MatchType, DevicesTypes, ComponentProps, ValueType };

type SwitchTypes = {
    onChange?: () => void;
    checked?: boolean;
    disabled?: boolean;
    externalConfig?: {
        [key: string]: unknown;
    };
};
export type { SwitchTypes };

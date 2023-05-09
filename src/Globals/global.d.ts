type calculateClampType = (min: number, max: number, minScreen: number, maxScreen: number) => string;
declare const clamp: calculateClampType;
declare const theme: {
    colors: {
        TextHeader: string;
        TextBody: string;
        TextSecondary: string;
        TextSub: string;
        White: string;
        BluePrimary: string;
        BlueText: string;
        Blue10: string;
        IconBlue: string;
        IconLight: string;
        MenuGray: string;
        Seperation: string;
        GreenPrimary: string;
        GreenDark: string;
        PurplePrimary: string;
        ErrorPrimary: string;
        Error10: string;
        Blue5: string;
        BlueHover: string;
        ButtonPrimary: string;
        ButtonPressed: string;
        ButtonDisabled: string;
    };
    helpers: {
        clamp: calculateClampType;
    };
};
declare const GlobalStyles: import("@emotion/utils").SerializedStyles;
export { GlobalStyles, theme, clamp };
export type { calculateClampType };

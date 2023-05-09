declare const isOverflown: ({ clientWidth, clientHeight, scrollWidth, scrollHeight, }: {
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
}) => boolean;
declare const copyToClipboard: (str: string) => Promise<void> | undefined;
declare const mobileShare: () => void;
export { isOverflown, copyToClipboard, mobileShare };

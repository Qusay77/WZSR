declare const usePlayer: (init?: boolean) => {
    PlayerInstance: import("rrweb-player").default | null;
    play: boolean;
    togglePlay: () => void;
    timer: number;
    SkipTime: (forward: boolean) => void;
    toggleSkip: () => void;
    skip: boolean;
    setReplaySpeed: (number: number) => void;
    speed: number;
    metaData: {
        startTime: number;
        endTime: number;
        totalTime: number;
    };
    totalTime: number;
    isSkipping: boolean;
};
export default usePlayer;

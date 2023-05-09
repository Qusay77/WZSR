import rrwebPlayer from "rrweb-player";
import type { PayloadAction } from "@reduxjs/toolkit";
interface PlayerStateTypes {
    PlayerInstance: rrwebPlayer | null;
    skip: boolean;
    play: boolean;
    timer: number;
    speed: number;
    isSkipping: boolean;
    metaData: {
        startTime: number;
        endTime: number;
        totalTime: number;
    };
}
declare const PlayerSlice: import("@reduxjs/toolkit").Slice<PlayerStateTypes, {
    setPlayer(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>, action: PayloadAction<rrwebPlayer | null>): void;
    setIsSkipping(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>, action: PayloadAction<boolean>): void;
    setSkipToggle(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>): void;
    setSpeed(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>, action: PayloadAction<number>): void;
    setPlay(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>, action: PayloadAction<boolean>): void;
    setTimerScale(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>, action: PayloadAction<number>): void;
    setMetaData(state: import("immer/dist/internal").WritableDraft<PlayerStateTypes>, action: PayloadAction<{
        startTime: number;
        endTime: number;
        totalTime: number;
    }>): void;
    resetPlayer: () => PlayerStateTypes;
}, "PlayerState">;
export type { PlayerStateTypes };
export declare const setPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<rrwebPlayer | null, "PlayerState/setPlayer">, setSkipToggle: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"PlayerState/setSkipToggle">, setPlay: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "PlayerState/setPlay">, setTimerScale: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "PlayerState/setTimerScale">, resetPlayer: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"PlayerState/resetPlayer">, setMetaData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    startTime: number;
    endTime: number;
    totalTime: number;
}, "PlayerState/setMetaData">, setSpeed: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "PlayerState/setSpeed">, setIsSkipping: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "PlayerState/setIsSkipping">;
export default PlayerSlice;

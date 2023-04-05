import rrwebPlayer from "rrweb-player";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface PlayerStateTypes {
	PlayerInstance: rrwebPlayer | null;
	skip: boolean;
	play: boolean;
	timer: number;
	speed: number;
	metaData: {
		startTime: number;
		endTime: number;
		totalTime: number;
	};
}
const initialState = {
	PlayerInstance: null,
	skip: false,
	play: false,
	speed: 1,
	timer: 0,
	metaData: {
		startTime: 0,
		endTime: 0,
		totalTime: 0,
	},
} as PlayerStateTypes;
const PlayerSlice = createSlice({
	name: "PlayerState",
	initialState,
	reducers: {
		setPlayer(state, action: PayloadAction<rrwebPlayer | null>) {
			state.PlayerInstance = action.payload;
		},
		setSkipToggle(state) {
			state.skip = !state.skip;
		},
		setSpeed(state, action: PayloadAction<number>) {
			state.speed = action.payload;
		},
		setPlay(state, action: PayloadAction<boolean>) {
			state.play = action.payload;
		},
		setTimer(state, action: PayloadAction<number>) {
			state.timer = action.payload;
		},
		setMetaData(
			state,
			action: PayloadAction<{
				startTime: number;
				endTime: number;
				totalTime: number;
			}>,
		) {
			state.metaData = action.payload;
		},
		resetPlayer: () => initialState,
	},
});
export type { PlayerStateTypes };
export const {
	setPlayer,
	setSkipToggle,
	setPlay,
	setTimer,
	resetPlayer,
	setMetaData,
	setSpeed,
} = PlayerSlice.actions;
export default PlayerSlice;

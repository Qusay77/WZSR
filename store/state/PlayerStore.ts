import rrwebPlayer from "rrweb-player";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ReplayApi from "src/services/record";
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
	data: Array<{ [key: string]: string }> | undefined;
}
const initialState = {
	PlayerInstance: null,
	skip: false,
	play: false,
	speed: 1,
	timer: 0,
	isSkipping: false,
	metaData: {
		startTime: 0,
		endTime: 0,
		totalTime: 0,
	},
	data: undefined,
} as PlayerStateTypes;
const PlayerSlice = createSlice({
	name: "PlayerState",
	initialState,
	reducers: {
		setPlayer(state, action: PayloadAction<rrwebPlayer | null>) {
			state.PlayerInstance = action.payload;
		},
		setIsSkipping(state, action: PayloadAction<boolean>) {
			state.isSkipping = action.payload;
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
		setTimerScale(state, action: PayloadAction<number>) {
			state.timer = Math.floor(action.payload * state.metaData.totalTime);
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
	extraReducers: (builder) => {
		builder.addMatcher(
			ReplayApi.endpoints.fetchReplayFile.matchFulfilled,
			(state, action) => {
				state.data = action.payload;
			},
		);
	},
});
export type { PlayerStateTypes };
export const {
	setPlayer,
	setSkipToggle,
	setPlay,
	setTimerScale,
	resetPlayer,
	setMetaData,
	setSpeed,
	setIsSkipping,
} = PlayerSlice.actions;
export default PlayerSlice;

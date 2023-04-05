import rrwebPlayer from "rrweb-player";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface PlayerStateTypes {
	PlayerInstance: rrwebPlayer | null;
	skip: boolean;
	play: boolean;
	timer: number;
}
const initialState = {
	PlayerInstance: null,
	skip: false,
	play: false,
	timer: 0,
} as PlayerStateTypes;
const PlayerSlice = createSlice({
	name: "PlayerState",
	initialState,
	reducers: {
		setPlayer(state, action: PayloadAction<rrwebPlayer | null>) {
			state.PlayerInstance = action.payload;
		},
		setSkipToggle(state, action: PayloadAction<boolean>) {
			state.skip = action.payload;
		},
		setPlay(state, action: PayloadAction<boolean>) {
			state.play = action.payload;
		},
		setTimer(state, action: PayloadAction<number>) {
			state.timer = action.payload;
		},
	},
});
export type { PlayerStateTypes };
export const { setPlayer, setSkipToggle, setPlay, setTimer } =
	PlayerSlice.actions;
export default PlayerSlice;

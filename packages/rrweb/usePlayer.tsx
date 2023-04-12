import { useDispatch, useSelector } from "react-redux";
import {
	PlayerStateTypes,
	setSkipToggle,
	setSpeed,
} from "store/state/PlayerStore";
import usePlayerEventListener from "./usePlayerEventListener";

const usePlayer = (init?: boolean) => {
	const { PlayerInstance, play, timer, metaData, skip, speed } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	const { totalTime } = metaData;
	const dispatch = useDispatch();
	if (init) {
		usePlayerEventListener(PlayerInstance);
	}
	const togglePlay = () => {
		PlayerInstance?.toggle();
	};
	const toggleSkip = () => {
		PlayerInstance?.toggleSkipInactive();
		dispatch(setSkipToggle());
	};
	const setReplaySpeed = (number: number) => {
		dispatch(setSpeed(number));
		PlayerInstance?.setSpeed(number);
	};
	const SkipTime = (forward: boolean) => {
		const ms = forward ? timer + 10000 : timer - 10000;
		const gt = ms > totalTime ? totalTime : ms;
		const res = ms < 0 ? 0 : gt;
		PlayerInstance?.goto(res, play);
	};

	return {
		PlayerInstance,
		play,
		togglePlay,
		timer,
		SkipTime,
		toggleSkip,
		skip,
		setReplaySpeed,
		speed,
		metaData,
		totalTime,
	};
};

export default usePlayer;

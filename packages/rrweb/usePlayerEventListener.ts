import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rrwebPlayer from "rrweb-player";
import {
	PlayerStateTypes,
	setIsSkipping,
	setPlay,
	setTimerScale,
} from "store/state/PlayerStore";
type CallBackValueType = { payload: number | unknown } | undefined;
type CallBackType = (arg: CallBackValueType) => void;
type CallBackArrayType = Array<CallBackType> | null;
type EventType = {
	eventName: string;
	callBack: CallBackType;
};
const usePlayerEventListener = (element: rrwebPlayer | null) => {
	const { metaData, play } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	const { totalTime } = metaData;
	const dispatch = useDispatch();
	const handlePlayToggle = (isStart: boolean) => {
		dispatch(setPlay(isStart));
	};

	const [scaleState, setScale] = useState(0);
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (play) {
				element?.goto(totalTime, play);
			}
		}, 2000);
		return () => clearTimeout(timeoutId);
	}, [scaleState]);

	const handleTimer = (scale: number) => {
		const ms = totalTime * scale;
		setScale(scale);
		const gt = ms >= totalTime;
		const lt = ms <= 0;

		if (gt || lt) {
			element?.toggle();
		}
		if (gt) {
			dispatch(setTimerScale(0));
			element?.goto(0, play);
		} else {
			dispatch(setTimerScale(scale));
		}
	};

	const handleSkipping = (value: boolean) => {
		dispatch(setIsSkipping(value));
	};
	const savedFunctions = useRef<CallBackArrayType>(null);
	const events: Array<EventType> = [
		{
			eventName: "start",
			callBack: () => handlePlayToggle(true),
		},
		{
			eventName: "pause",
			callBack: () => handlePlayToggle(false),
		},
		{
			eventName: "ui-update-progress",
			callBack: (arg) => handleTimer(arg?.payload as number),
		},
		{
			eventName: "skip-start",
			callBack: () => handleSkipping(true),
		},
		{
			eventName: "skip-end",
			callBack: () => handleSkipping(false),
		},
	];
	useEffect(() => {
		savedFunctions.current = events.map(({ callBack }) => callBack);
	}, [metaData]);
	useEffect(() => {
		if (!element) return;
		events.forEach(({ eventName }, i) => {
			const eventListener = (event: CallBackValueType) => {
				savedFunctions?.current && savedFunctions.current[i](event);
			};
			element.addEventListener(eventName, eventListener);
		});
	}, [element]);
};
export default usePlayerEventListener;

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import rrwebPlayer from "rrweb-player";
import { PlayerStateTypes, setPlay, setTimer } from "store/PlayerStore";
type CallBackValueType = { payload: number | unknown } | undefined;
type CallBackType = (arg: CallBackValueType) => void;
type CallBackArrayType = Array<CallBackType> | null;
type EventType = {
	eventName: string;
	callBack: CallBackType;
};
const usePlayerEventListener = (element: rrwebPlayer | null) => {
	const { metaData } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	const { totalTime } = metaData;
	const dispatch = useDispatch();
	const handlePlayToggle = (isStart: boolean) => {
		dispatch(setPlay(isStart));
	};
	const handleTimer = (scale: number) => {
		const timeInMS = Math.floor((totalTime * scale) / 1000);
		const ms = totalTime * scale;
		// 20 ms less because it never reaches full
		const gt = ms >= totalTime - 100;
		const lt = ms <= 0;
		if (gt || lt) {
			element?.toggle();
		}
		dispatch(setTimer(timeInMS));
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

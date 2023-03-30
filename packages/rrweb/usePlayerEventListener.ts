import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import rrwebPlayer from "rrweb-player";
import { setPlay, setTimer } from "store/PlayerStore";
type CallBackValueType = { payload: number | unknown } | undefined;
type CallBackType = (arg: CallBackValueType) => void;
type CallBackArrayType = Array<CallBackType> | null;
type EventType = {
	eventName: string;
	callBack: CallBackType;
};
const usePlayerEventListener = (element: rrwebPlayer | null) => {
	const meta = element?.getMetaData() || { totalTime: 0 };
	const dispatch = useDispatch();
	const handlePlayToggle = (isStart: boolean) => {
		dispatch(setPlay(isStart));
	};
	const handleTimer = (scale: number) => {
		const timeInMS = Math.floor((meta.totalTime * scale) / 1000);
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
	}, [meta]);
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

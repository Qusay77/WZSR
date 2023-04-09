import { usePlayer } from "packages/rrweb";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { TimeRangeInput } from "./Blocks";

const TimeBar = () => {
	const { PlayerInstance, totalTime, play, timer } = usePlayer(true);

	const [isMouseDown, setIsMouseDown] = useState(false);
	const [cloneState, setCloneState] = useState(timer);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10);
		if (!isMouseDown) {
			PlayerInstance?.goto(value, play);
		} else {
			setCloneState(value);
		}
	};

	const handleMouseDown = useCallback(() => {
		setIsMouseDown(true);
		setCloneState(timer);

		document.addEventListener(
			"mouseup",
			() => {
				setCloneState(timer);
				setIsMouseDown(false);
			},
			{ once: true },
		);
	}, []);
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (play && isMouseDown) {
				setIsMouseDown(false);
				PlayerInstance?.goto(cloneState, play);
			}
		}, 500);
		return () => clearTimeout(timeoutId);
	}, [cloneState]);

	const min = 0;
	const max = totalTime || 1;
	const val = isMouseDown ? cloneState : timer;
	const backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
	return (
		<TimeRangeInput
			type="range"
			value={val}
			min={min}
			max={max}
			onChange={handleInputChange}
			backgroundSize={backgroundSize}
			onMouseDown={handleMouseDown}
		/>
	);
};

export default TimeBar;

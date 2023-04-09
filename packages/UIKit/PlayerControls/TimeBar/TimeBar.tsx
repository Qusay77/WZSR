import { usePlayer } from "packages/rrweb";
import { ChangeEvent } from "react";
import { TimeRangeInput } from "./Blocks";

const TimeBar = () => {
	const { PlayerInstance, totalTime, play, timer } = usePlayer(true);
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10);
		PlayerInstance?.goto(value, play);
	};
	const min = 0;
	const max = totalTime || 1;
	const val = timer;
	const backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
	return (
		<TimeRangeInput
			type="range"
			value={val}
			min={min}
			max={max}
			onChange={handleInputChange}
			backgroundSize={backgroundSize}
		/>
	);
};

export default TimeBar;

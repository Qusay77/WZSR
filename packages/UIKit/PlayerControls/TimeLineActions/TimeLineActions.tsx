import {
	PlayActionsContainer,
	PlayButton,
	PlayerActionsContainer,
	ProgressStamp,
	SkipButton,
} from "./Blocks";

import { ReactComponent as SkipBack } from "./svg/skipback.svg";
import { ReactComponent as SkipForward } from "./svg/skipforward.svg";
import { ReactComponent as PlayIcon } from "./svg/play.svg";
import { ReactComponent as PauseIcon } from "./svg/pause.svg";
import { usePlayer } from "packages/rrweb";
const PlayerProgress = () => {
	const { metaData, timer } = usePlayer();
	const { totalTime } = metaData;
	const DateTotalTime = new Date(totalTime);
	const totalTimeString = DateTotalTime.toLocaleTimeString("en-US", {
		second: "2-digit",
		minute: "2-digit",
	});
	const DateTimer = new Date(timer);
	const DateTimerString = DateTimer.toLocaleTimeString("en-US", {
		second: "2-digit",
		minute: "2-digit",
	});
	return (
		<ProgressStamp>
			{DateTimerString} / {totalTimeString}
		</ProgressStamp>
	);
};
const Skip = ({ dir, onClick }: { dir: string; onClick: () => void }) => {
	return (
		<SkipButton onClick={onClick}>
			{dir === "back" && <SkipBack />}
			{dir === "forward" && <SkipForward />}
		</SkipButton>
	);
};
const Play = ({
	isPlaying,
	onClick,
}: {
	isPlaying: boolean;
	onClick: () => void;
}) => {
	return (
		<PlayButton onClick={onClick}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</PlayButton>
	);
};
const PlayActions = () => {
	const { togglePlay, play, SkipTime } = usePlayer();
	return (
		<PlayActionsContainer>
			<Skip dir="back" onClick={() => SkipTime(false)} />
			<Play onClick={togglePlay} isPlaying={play} />
			<Skip dir="forward" onClick={() => SkipTime(true)} />
		</PlayActionsContainer>
	);
};
const TimeLineActions = () => {
	return (
		<PlayerActionsContainer>
			<PlayActions />
			<PlayerProgress />
		</PlayerActionsContainer>
	);
};
export { PlayerProgress, PlayActions, TimeLineActions };

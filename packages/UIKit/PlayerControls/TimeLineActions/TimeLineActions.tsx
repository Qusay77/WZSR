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
const PlayerProgress = () => {
	return <ProgressStamp>00:12 / 02:47</ProgressStamp>;
};
const Skip = ({ dir }: { dir: string }) => {
	return (
		<SkipButton>
			{dir === "back" && <SkipBack />}
			{dir === "forward" && <SkipForward />}
		</SkipButton>
	);
};
const Play = ({ isPlaying }: { isPlaying: boolean }) => {
	return <PlayButton>{isPlaying ? <PauseIcon /> : <PlayIcon />}</PlayButton>;
};
const PlayActions = () => {
	return (
		<PlayActionsContainer>
			<Skip dir="back" />
			<Play isPlaying={true} />
			<Skip dir="forward" />
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

import {
	PlayerControlsContainer,
	SpeedAndToggleBlock,
	TextSeparator,
} from "./Blocks";
import { TimeLineActions } from "./TimeLineActions";
import PlayerSpeed from "./PlaySpeed";
import ToggleSwitch from "../ToggleSwitch";
import { usePlayer } from "packages/rrweb";
const PlayerControls = ({
	enterFullScreen,
}: {
	enterFullScreen: () => void;
}) => {
	const { toggleSkip, skip } = usePlayer(true);
	return (
		<PlayerControlsContainer>
			<TimeLineActions />
			<SpeedAndToggleBlock>
				<p
					onClick={enterFullScreen}
					style={{ cursor: "pointer", fontWeight: 600 }}
				>
					FullScreen
				</p>
				<PlayerSpeed />
				<TextSeparator />
				<p>Skip Idle Time</p>
				<ToggleSwitch checked={skip} onChange={toggleSkip} />
			</SpeedAndToggleBlock>
		</PlayerControlsContainer>
	);
};

export default PlayerControls;

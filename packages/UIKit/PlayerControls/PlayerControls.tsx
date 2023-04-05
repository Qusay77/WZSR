import {
	PlayerControlsContainer,
	SpeedAndToggleBlock,
	TextSeparator,
} from "./Blocks";
import { TimeLineActions } from "./TimeLineActions";
import PlayerSpeed from "./PlaySpeed";
import ToggleSwitch from "../ToggleSwitch";
const PlayerControls = () => {
	return (
		<PlayerControlsContainer>
			<TimeLineActions />
			<SpeedAndToggleBlock>
				<PlayerSpeed />
				<TextSeparator />
				<p>Skip Idle Time</p>
				<ToggleSwitch />
			</SpeedAndToggleBlock>
		</PlayerControlsContainer>
	);
};

export default PlayerControls;

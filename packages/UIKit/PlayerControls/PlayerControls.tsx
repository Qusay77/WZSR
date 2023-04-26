import {
	PlayerControlsContainer,
	PlayerControlsInnerContainer,
	SpeedAndToggleBlock,
	TextSeparator,
} from "./Blocks";
import { TimeLineActions } from "./TimeLineActions";
import PlayerSpeed from "./PlaySpeed";
import ToggleSwitch from "../ToggleSwitch";
import { usePlayer } from "packages/rrweb";
import TimeBar from "./TimeBar";
const PlayerControls = ({
	enterFullScreen,
}: {
	enterFullScreen: () => void;
}) => {
	const { toggleSkip, skip, isSkipping } = usePlayer(true);
	return (
		<PlayerControlsContainer>
			<TimeBar />
			<PlayerControlsInnerContainer>
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
					<ToggleSwitch
						disabled={isSkipping}
						checked={skip}
						onChange={toggleSkip}
					/>
				</SpeedAndToggleBlock>
			</PlayerControlsInnerContainer>
		</PlayerControlsContainer>
	);
};

export default PlayerControls;

import Player from "packages/rrweb";
import PlayerControls from "../PlayerControls";
import { PlayerContainer, PlayerControlsContainer } from "./Blocks";

const PlayerBlock = ({ enterFullScreen }: { enterFullScreen: () => void }) => {
	return (
		<PlayerContainer>
			<Player />
			<PlayerControlsContainer>
				<PlayerControls enterFullScreen={enterFullScreen} />
			</PlayerControlsContainer>
		</PlayerContainer>
	);
};

export default PlayerBlock;

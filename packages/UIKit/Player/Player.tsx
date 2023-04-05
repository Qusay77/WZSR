import Player from "packages/rrweb";
import PlayerControls from "../PlayerControls";
import { PlayerContainer, PlayerControlsContainer } from "./Blocks";

const PlayerBlock = () => {
	return (
		<PlayerContainer>
			<Player />
			<PlayerControlsContainer>
				<PlayerControls />
			</PlayerControlsContainer>
		</PlayerContainer>
	);
};

export default PlayerBlock;

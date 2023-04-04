import Player from "packages/rrweb";
import SessionEvents from "../SessionEvents";
import { PlayerContainer } from "./Blocks";

const PlayerBlock = () => {
	return (
		<PlayerContainer>
			<Player />
			<SessionEvents />
		</PlayerContainer>
	);
};

export default PlayerBlock;

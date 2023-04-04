import Player, { usePlayer } from "packages/rrweb";
import { PlayerContainer } from "./Blocks";

const PlayerBlock = () => {
	const { togglePlay, play, timer } = usePlayer();
	return (
		<PlayerContainer>
			<Player />
			<div>test</div>
			<div
				onClick={() => {
					togglePlay();
				}}
			>
				lool {`${play} ${timer}`}
			</div>
		</PlayerContainer>
	);
};

export default PlayerBlock;

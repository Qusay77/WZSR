import Player, { usePlayer } from "packages/rrweb";

const SRWindow = () => {
	const { togglePlay, play, timer } = usePlayer();
	return (
		<>
			<Player />
			<div>test</div>
			<div
				onClick={() => {
					togglePlay();
				}}
			>
				lool {`${play} ${timer}`}
			</div>
		</>
	);
};

export default SRWindow;

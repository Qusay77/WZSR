import { usePlayer } from "packages/rrweb";
import { SpeedBlock, SpeedButton } from "./Blocks";
const WZConfig = [1, 2, 4];
const PlayerSpeed = () => {
	const { setReplaySpeed, speed } = usePlayer();

	return (
		<SpeedBlock>
			{WZConfig.map((e) => (
				<SpeedButton
					key={`speed-button-${e}`}
					active={speed === e}
					onClick={() => {
						setReplaySpeed(e);
					}}
				>
					X{e}
				</SpeedButton>
			))}
		</SpeedBlock>
	);
};

export default PlayerSpeed;

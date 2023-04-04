import { useState } from "react";
import { SpeedBlock, SpeedButton } from "./Blocks";
const WZConfig = [1, 2, 4];
const PlayerSpeed = () => {
	const [active, setActive] = useState(WZConfig[0]);
	return (
		<SpeedBlock>
			{WZConfig.map((e) => (
				<SpeedButton
					key={`speed-button-${e}`}
					active={active === e}
					onClick={() => {
						setActive(e);
					}}
				>
					X{e}
				</SpeedButton>
			))}
		</SpeedBlock>
	);
};

export default PlayerSpeed;

import PlayerBlock from "packages/UIKit/Player";
import SessionEvents from "packages/UIKit/SessionEvents";
import { SRScreen } from "./Blocks";

const SRWindow = () => {
	return (
		<SRScreen>
			<PlayerBlock />
			<SessionEvents />
		</SRScreen>
	);
};

export default SRWindow;

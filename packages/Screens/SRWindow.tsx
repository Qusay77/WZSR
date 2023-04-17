import PlayerBlock from "packages/UIKit/Player";
import SessionEvents from "packages/UIKit/SessionEvents";
import { SRScreen, SRScreenWrapper } from "./Blocks";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from "react";
const SRWindow = () => {
	const handle = useFullScreenHandle();
	useEffect(() => {
		if (!handle.active) {
			const rr_player = Array.from(
				document.getElementsByClassName(
					"rr-player",
				) as HTMLCollectionOf<HTMLElement>,
			)[0];
			const player__frame = Array.from(
				document.getElementsByClassName(
					"rr-player__frame",
				) as HTMLCollectionOf<HTMLElement>,
			)[0];
			if (rr_player) {
				rr_player.style.width = "100%";
				rr_player.style.height = "100%";
				player__frame.style.width = "100%";
				player__frame.style.height = "100%";
			}
		}
	}, [handle.active]);
	return (
		<FullScreen handle={handle}>
			<SRScreen>
				<SRScreenWrapper>
					<PlayerBlock
						enterFullScreen={handle.active ? handle.exit : handle.enter}
					/>
					{handle.active ? null : <SessionEvents />}
				</SRScreenWrapper>
			</SRScreen>
		</FullScreen>
	);
};

export default SRWindow;

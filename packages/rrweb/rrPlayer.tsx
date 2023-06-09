import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import {
	PlayerStateTypes,
	resetPlayer,
	setMetaData,
	setPlayer,
} from "store/state/PlayerStore";
import { PlayerMount } from "./Blocks";
import usePlayerDimensions from "./usePlayerDimensions";

const Player = () => {
	const PlayerRef = useRef(null);
	const dispatch = useDispatch();
	const { PlayerInstance, data } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);

	useEffect(() => {
		// dev fix for strict mode
		const rr_player = Array.from(
			document.getElementsByClassName(
				"rr-player",
			) as HTMLCollectionOf<HTMLElement>,
		)[0];
		if (PlayerRef.current && !PlayerInstance && !rr_player && data) {
			const newPlayer = new rrwebPlayer({
				target: PlayerRef.current,
				props: {
					events: JSON.parse(`${JSON.stringify(data)}`),
					// events: events,
					showController: false,
					autoPlay: false,
					useVirtualDom: true,
					skipInactive: false,
				},
			});
			const meta = newPlayer.getMetaData();
			dispatch(setMetaData(meta));
			dispatch(setPlayer(newPlayer));
		}

		return () => {
			if (import.meta.env.VITE_APP_ENV === "production") {
				dispatch(resetPlayer());
				dispatch(setPlayer(null));
			}
		};
	}, [PlayerRef, data]);
	usePlayerDimensions(PlayerRef?.current);

	return <PlayerMount ref={PlayerRef} />;
};

export default Player;

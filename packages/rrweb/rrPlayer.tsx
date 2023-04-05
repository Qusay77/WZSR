import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { PlayerStateTypes, setPlayer } from "store/PlayerStore";
import { PlayerMount } from "./Blocks";
import events from "./events.json";
import usePlayerDimensions from "./usePlayerDimensions";

const Player = () => {
	const PlayerRef = useRef(null);
	const dispatch = useDispatch();
	const { PlayerInstance } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	useEffect(() => {
		// dev fix for strict mode
		const rr_player = Array.from(
			document.getElementsByClassName(
				"rr-player",
			) as HTMLCollectionOf<HTMLElement>,
		)[0];
		if (PlayerRef.current && !PlayerInstance && !rr_player) {
			const newPlayer = new rrwebPlayer({
				target: PlayerRef.current,
				props: {
					events,
					showController: false,
					autoPlay: false,
					useVirtualDom: true,
				},
			});

			dispatch(setPlayer(newPlayer));
		}
		return () => {
			dispatch(setPlayer(null));
		};
	}, [PlayerRef]);
	usePlayerDimensions(PlayerRef?.current);

	return <PlayerMount ref={PlayerRef} />;
};

export default Player;

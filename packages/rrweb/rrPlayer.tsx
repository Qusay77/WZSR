import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { useFetchReplayFileQuery } from "src/services/record";
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
	const { PlayerInstance } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	const { data } = useFetchReplayFileQuery("session1");

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
					events: JSON.parse(data),
					showController: false,
					autoPlay: false,
					useVirtualDom: true,
				},
			});
			const meta = newPlayer.getMetaData();
			dispatch(setMetaData(meta));
			dispatch(setPlayer(newPlayer));
		}
		return () => {
			dispatch(resetPlayer());
			dispatch(setPlayer(null));
		};
	}, [PlayerRef, data]);
	usePlayerDimensions(PlayerRef?.current);

	return <PlayerMount ref={PlayerRef} />;
};

export default Player;

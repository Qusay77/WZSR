import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { PlayerStateTypes, setPlayer } from "store/PlayerStore";
import events from "./events.json";

const Player = () => {
	const [PlayerRef, setPlayerRef] = useState<HTMLDivElement | null>(null);
	const dispatch = useDispatch();
	const { PlayerInstance } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	useEffect(() => {
		if (PlayerRef && !PlayerInstance) {
			const newPlayer = new rrwebPlayer({
				target: PlayerRef, // customizable root element
				props: {
					events,
					showController: true,
					autoPlay: false,
				},
			});
			dispatch(setPlayer(newPlayer));
		}
	}, [PlayerRef]);

	return <div ref={(ref) => setPlayerRef(ref)} />;
};

export default Player;

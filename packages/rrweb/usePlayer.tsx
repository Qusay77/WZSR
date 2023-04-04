import { useSelector } from "react-redux";
import { PlayerStateTypes } from "store/PlayerStore";
import usePlayerEventListener from "./usePlayerEventListener";

const usePlayer = () => {
	const { PlayerInstance, play, timer } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	usePlayerEventListener(PlayerInstance);
	const togglePlay = () => {
		PlayerInstance?.toggle();
	};

	return { PlayerInstance, play, togglePlay, timer };
};

export default usePlayer;

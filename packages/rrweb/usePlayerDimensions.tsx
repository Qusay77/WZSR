import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { clamp } from "src/Globals/global";
import { PlayerStateTypes } from "store/state/PlayerStore";

const usePlayerDimensions = (PlayerRef: HTMLDivElement | null) => {
	const { PlayerInstance } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	const replayDimensionRef = useRef<{ width: number; height: number }>();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 100);
		return () => clearTimeout(timeoutId);
	}, []);
	useEffect(() => {
		if (!PlayerInstance) {
			return;
		}
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
		const wrapper = Array.from(
			document.getElementsByClassName(
				"replayer-wrapper",
			) as HTMLCollectionOf<HTMLElement>,
		)[0];
		if (rr_player) {
			rr_player.style.height = "100%";
			rr_player.style.width = "100%";
			player__frame.style.width = "100%";
			player__frame.style.height = "100%";
		}
		PlayerInstance.addEventListener("resize", (replayDimensions) => {
			updatePlayerDimensions(
				replayDimensions,
				rr_player,
				player__frame,
				wrapper,
			);
		});
		const windowResizeCallBack = () =>
			windowResize(rr_player, player__frame, wrapper);
		window.addEventListener("resize", windowResizeCallBack);
		return () => window.removeEventListener("resize", windowResizeCallBack);
	}, [PlayerInstance]);

	const windowResize = (
		Player: HTMLElement,
		Frame: HTMLElement,
		wrapper: HTMLElement,
	) => {
		updatePlayerDimensions(replayDimensionRef.current, Player, Frame, wrapper);
	};

	const updatePlayerDimensions = (
		replayDimensions: { width: number; height: number } | undefined,
		Player: HTMLElement,
		Frame: HTMLElement,
		wrapper: HTMLElement,
	) => {
		const wrapperRect = wrapper?.getBoundingClientRect();
		const screenWidth = window.innerWidth;
		if (Player) {
			if (screenWidth >= 800) {
				Player.style.height = "calc(100% - 88px)";
				if (PlayerRef) {
					PlayerRef.style.height = "100%";
				}
			} else if (screenWidth < 800) {
				if (wrapperRect && PlayerRef) {
					Player.style.height = `${wrapperRect.height}px`;
					PlayerRef.style.height = `calc(${wrapperRect.height * 2}px + ${clamp(
						1,
						110,
						550,
						800,
					)})`;
				}
			}
		}
		if (!replayDimensions || !PlayerRef) {
			return;
		}

		if (PlayerRef.parentElement) {
			replayDimensionRef.current = replayDimensions;
			const rect = PlayerRef?.getBoundingClientRect();
			const { width, height } = replayDimensions;
			const rectScale = Math.min(
				(rect?.width || 1) / (width + 88),
				(rect?.height || 1) / height,
				1,
			);

			if (Frame) {
				Frame.style.display = "flex";
				Frame.style.justifyContent = "center";
				Frame.style.alignItems = "center";
			}

			if (wrapper) {
				wrapper.style.float = "none";
				wrapper.style.clear = "none";
				wrapper.style.transformOrigin = "50% 50% 0";
				wrapper.style.top = "auto";
				wrapper.style.left = "auto";
				wrapper.style.transform = `scale(${rectScale})`;
			}
		}
	};
	return;
};

export default usePlayerDimensions;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { PlayerStateTypes } from "store/state/PlayerStore";

// scaling issues for later

const usePlayerDimensions = (PlayerRef: HTMLDivElement | null) => {
	const { PlayerInstance } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	const replayDimensionRef = useRef<unknown>();
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
		const rect = rr_player?.getBoundingClientRect();
		if (rr_player) {
			rr_player.style.width = "100%";
			rr_player.style.height = "100%";
			player__frame.style.width = "100%";
			player__frame.style.height = "100%";
		}
		PlayerInstance.addEventListener("resize", (replayDimensions) =>
			updatePlayerDimensions(replayDimensions, rect, rr_player, player__frame),
		);
		const windowResizeCallBack = () =>
			windowResize(rect, rr_player, player__frame);
		window.addEventListener("resize", windowResizeCallBack);
		return () => window.removeEventListener("resize", windowResizeCallBack);
	}, [PlayerInstance]);

	const windowResize = (
		PlayerRect: DOMRect,
		Player: HTMLElement,
		Frame: HTMLElement,
	) => {
		updatePlayerDimensions(
			replayDimensionRef.current as { width: number; height: number },
			PlayerRect,
			Player,
			Frame,
		);
	};

	const updatePlayerDimensions = (
		replayDimensions: { width: number; height: number } | undefined,
		PlayerRect: DOMRect,
		Player: HTMLElement,
		Frame: HTMLElement,
	) => {
		if (!replayDimensions || !PlayerRef) {
			return;
		}
		if (PlayerRef.parentElement) {
			replayDimensionRef.current = replayDimensions;
			const { width, height } = PlayerRef.parentElement.getBoundingClientRect();
			const wrapperScale = Math.min(
				width / replayDimensions.width,
				height / replayDimensions.height,
				1,
			);

			const rectScale = Math.min(
				width / PlayerRect.width,
				height / PlayerRect.height,
				1,
			);
			const wrapper = Array.from(
				document.getElementsByClassName(
					"replayer-wrapper",
				) as HTMLCollectionOf<HTMLElement>,
			)[0];
			if (rectScale < 1) {
				Player.style.transform = `scale(${rectScale})`;
				Player.style.transformOrigin = "0 0";
				Player.style.width = "";
				Player.style.height = "";
				Frame.style.width = `${PlayerRect.width}px`;
				Frame.style.height = `${PlayerRect.height}px`;
			} else if (rectScale >= 1) {
				Player.style.width = "100%";
				Player.style.height = "100%";
				Frame.style.width = "100%";
				Frame.style.height = "100%";
			}
			if (wrapperScale < 1) {
				wrapper.style.width = "100%";
				wrapper.style.height = "100%";
			} else if (wrapperScale >= 1) {
				wrapper.style.width = "";
				wrapper.style.height = "";
			}
		}
	};
	return;
};

export default usePlayerDimensions;

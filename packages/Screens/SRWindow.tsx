import PlayerBlock from "packages/UIKit/Player";
import SessionEvents from "packages/UIKit/SessionEvents";
import { SRScreen, SRScreenWrapper } from "./Blocks";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from "react";
import Loader from "packages/UIKit/Loader";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { useFetchSessionDetailsQuery } from "src/services/details";
import { ErrorBoundary } from "react-error-boundary";
import { PlayerStateTypes } from "store/state/PlayerStore";
import { useLazyFetchReplayFileQuery } from "src/services/record/record";
const SRWindow = ({ sessionId }: { sessionId?: string }) => {
	const handle = useFullScreenHandle();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 100);
		return () => clearTimeout(timeoutId);
	}, [handle.active]);
	const { data } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	if (!sessionId) {
		return (
			<div
				style={{
					backgroundColor: "white",
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Session ID is &nbsp; <p style={{ color: "red" }}>Missing</p>
			</div>
		);
	}
	useFetchSessionDetailsQuery({
		sessionId: sessionId,
	});
	const { replayUrl } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const [fetchReplayFile, { isError }] = useLazyFetchReplayFileQuery();
	useEffect(() => {
		if (replayUrl) {
			fetchReplayFile(replayUrl);
		}
	}, [replayUrl]);

	if (isError) {
		return (
			<div
				style={{
					backgroundColor: "white",
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Replay File &nbsp; <p style={{ color: "red" }}>Missing</p>
			</div>
		);
	}
	return (
		<FullScreen handle={handle}>
			<SRScreen>
				<SRScreenWrapper>
					{data ? (
						<ErrorBoundary
							onError={(error, componentStack) => {
								// eslint-disable-next-line no-console
								console.log(error, componentStack);
							}}
							fallback={
								<div
									style={{
										backgroundColor: "white",
										width: "100%",
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									Player &nbsp; <p style={{ color: "red" }}>Error</p> &nbsp;
									Check console
								</div>
							}
						>
							<PlayerBlock
								enterFullScreen={handle.active ? handle.exit : handle.enter}
							/>
						</ErrorBoundary>
					) : null}

					{handle.active || !data ? null : <SessionEvents />}
					{data ? null : <Loader />}
				</SRScreenWrapper>
			</SRScreen>
		</FullScreen>
	);
};

export default SRWindow;

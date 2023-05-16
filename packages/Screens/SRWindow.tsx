import PlayerBlock from "packages/UIKit/Player";
import SessionEvents from "packages/UIKit/SessionEvents";
import { SRScreen, SRScreenWrapper } from "./Blocks";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from "react";
import Loader from "packages/UIKit/Loader";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { useFetchSessionDetailsQuery } from "src/services/details";
import { PlayerStateTypes } from "store/state/PlayerStore";
const SRWindow = () => {
	const handle = useFullScreenHandle();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 100);
		return () => clearTimeout(timeoutId);
	}, [handle.active]);
	const { ready } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	useFetchSessionDetailsQuery({
		orgId: 645,
		sessionId: 15781901128595206000,
		// sessionId: 15781901128595206000,
	});
	const { PlayerInstance } = useSelector(
		({ PlayerState }: { PlayerState: PlayerStateTypes }) => PlayerState,
	);
	return (
		<FullScreen handle={handle}>
			<SRScreen>
				<SRScreenWrapper>
					{ready ? (
						PlayerInstance ? (
							<PlayerBlock
								enterFullScreen={handle.active ? handle.exit : handle.enter}
							/>
						) : (
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
								Player &nbsp; <p style={{ color: "red" }}>Error</p> &nbsp; Check
								console
							</div>
						)
					) : null}
					{handle.active || !ready ? null : <SessionEvents />}
					{ready ? null : <Loader />}
				</SRScreenWrapper>
			</SRScreen>
		</FullScreen>
	);
};

export default SRWindow;

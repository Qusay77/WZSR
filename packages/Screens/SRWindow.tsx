import PlayerBlock from "packages/UIKit/Player";
import SessionEvents from "packages/UIKit/SessionEvents";
import { SRScreen, SRScreenWrapper } from "./Blocks";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from "react";
import Loader from "packages/UIKit/Loader";
import { useSelector } from "react-redux";
import { EventsDetails } from "store/state/EventsDetails";
import { useFetchSessionDetailsQuery } from "src/services/details";
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
		sessionId: 4871628925818847000,
		// sessionId: 15781901128595206000,
	});
	return (
		<FullScreen handle={handle}>
			<SRScreen>
				<SRScreenWrapper>
					{ready ? (
						<PlayerBlock
							enterFullScreen={handle.active ? handle.exit : handle.enter}
						/>
					) : null}
					{handle.active || !ready ? null : <SessionEvents />}
					{ready ? null : <Loader />}
				</SRScreenWrapper>
			</SRScreen>
		</FullScreen>
	);
};

export default SRWindow;

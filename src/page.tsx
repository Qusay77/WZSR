import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import SessionRecording from "./lib";
import "https://dev.sr.webeyez.dev/module/srIIFE.js";
// import "../module/srIIFE";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			{import.meta.env.VITE_APP_ENV === "production" ? (
				<wz-sr
				// sessionId={15781901128595206000}
				></wz-sr>
			) : (
				<SessionRecording />
			)}
		</StrictMode>,
	);
}

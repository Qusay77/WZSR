import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import SessionRecording from "./lib";
// import "../scripts/srIIFE";

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<SessionRecording />
			<wz-sr></wz-sr>
		</StrictMode>,
	);
}

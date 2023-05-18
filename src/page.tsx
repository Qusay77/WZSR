import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import SessionRecording from "./lib";
import "https://sr.webeyez.dev/module/srIIFE.js";
// import "../module/srIIFE";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			{/* <SessionRecording /> */}
			<wz-sr
			// sessionId={15781901128595206000}
			></wz-sr>
		</StrictMode>,
	);
}

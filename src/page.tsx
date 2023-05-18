import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import SessionRecording from "./lib";
import "https://sr.webeyez.dev/module/srIIFE.js";

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			{/* <SessionRecording /> */}
			<wz-sr sessionId="2" orgId="22"></wz-sr>
		</StrictMode>,
	);
}

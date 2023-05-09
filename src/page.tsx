import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import SessionRecording from "./lib";

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<SessionRecording />
		</StrictMode>,
	);
}

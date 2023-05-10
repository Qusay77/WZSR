import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import SessionRecording from "./lib";
const SessionRecording = () => {
	useEffect(() => {
		const tagName = "wz-sr";
		if (typeof customElements !== "undefined") {
			import("https://sr.webeyez.dev/module/WZSR.mjs").then((module) => {
				if (!customElements.get("wz-sr")) {
					customElements.define(tagName, module.default);
				}
			});
		}
	}, []);
	return <wz-sr></wz-sr>;
};
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<SessionRecording />
		</StrictMode>,
	);
}

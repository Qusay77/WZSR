import React from "react";
import ReactDOM from "react-dom/client";
import SessionRecording from "./lib";
import reactToWebComponent from "react-to-webcomponent";

const SessionRecordingWeb = reactToWebComponent(
	SessionRecording,
	React,
	ReactDOM,
	{
		props: {
			sessionId: "number",
			orgId: "number",
		},
	},
);

export default SessionRecordingWeb;

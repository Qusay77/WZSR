import React from "react";
import ReactDOM from "react-dom/client";
import SessionRecording from "./lib";
import reactToWebComponent from "react-to-webcomponent";

const SessionRecordingWeb = reactToWebComponent(
	SessionRecording,
	React,
	ReactDOM,
);

export default SessionRecordingWeb;

//scr
// (function () {
//     const scriptURL = 'https://example.com/my-web-component.js';
//     const tagName = 'my-web-component';

//     function registerComponent() {
//       if (typeof customElements !== 'undefined') {
//         const MyWebComponent = window.MyWebComponent.default;
//         customElements.define(tagName, MyWebComponent);
//       } else {
//         setTimeout(registerComponent, 100);
//       }
//     }

//     const script = document.createElement('script');
//     script.src = scriptURL;
//     script.onload = registerComponent;
//     document.head.appendChild(script);
//   })();

/// <reference types="vite/client" />

declare module "*.svg" {
	import * as React from "react";

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	const src: string;
	export default src;
}

declare module "https://sr.webeyez.dev/module/WZSR.mjs" {
	const value: {
		default: HTMLElement;
	};
	export default value as CustomElementConstructor;
}

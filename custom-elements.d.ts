import * as React from "react";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"wz-sr": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}

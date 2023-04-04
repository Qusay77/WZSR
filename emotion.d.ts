import "@emotion/react";
import { calculateClampType } from "src/Globals/global";

declare module "@emotion/react" {
	export interface Theme {
		colors: {
			[key: string]: string;
		};
		helpers: {
			clamp: calculateClampType;
		};
	}
}

import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { Global, ThemeProvider } from "@emotion/react";
import { store } from "../store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "../src/Globals/global";

// ..other decorators here

export const withGlobals: Decorator = (StoryFn) => {
	return (
		<Provider store={store}>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<StoryFn />
			</ThemeProvider>
		</Provider>
	);
};

export const decorators = [withGlobals];
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;

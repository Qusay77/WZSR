import { Global, ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
import Player from "packages/rrweb";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<Global styles={GlobalStyles} />
				<ThemeProvider theme={theme}>
					<>
						{Player}
						<div>test</div>
					</>
				</ThemeProvider>
			</Provider>
		</StrictMode>,
	);
}

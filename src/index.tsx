import { Global, ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Provider store={store}>
				<Global styles={GlobalStyles} />
				<ThemeProvider theme={theme}>
					<div>test</div>
				</ThemeProvider>
			</Provider>
		</StrictMode>,
	);
}

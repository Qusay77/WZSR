import { Global, ThemeProvider } from "@emotion/react";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
import SRWindow from "packages/Screens/SRWindow";

const SessionRecording = ({
	sessionId,
	orgId,
}: {
	sessionId: number;
	orgId: number;
}) => {
	return (
		<Provider store={store}>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<SRWindow sessionId={sessionId} orgId={orgId} />
			</ThemeProvider>
		</Provider>
	);
};

export default SessionRecording;

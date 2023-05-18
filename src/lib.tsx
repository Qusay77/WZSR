import { Global, ThemeProvider } from "@emotion/react";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
import SRWindow from "packages/Screens/SRWindow";
interface Props {
	sessionId: number;
	orgId: number;
}

const SessionRecording: React.FC<Props> = ({ sessionId, orgId }) => {
	// eslint-disable-next-line no-console
	console.log("props", sessionId, orgId);
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

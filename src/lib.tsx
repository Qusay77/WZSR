import { Global, ThemeProvider } from "@emotion/react";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
import SRWindow from "packages/Screens/SRWindow";

const SessionRecording = ({
	container,
}: {
	container: { attributes: NamedNodeMap };
}) => {
	// eslint-disable-next-line no-console
	const sessionIdValue = container.attributes.getNamedItem("sessionId")?.value;
	const orgIdValue = container.attributes.getNamedItem("orgId")?.value;
	const sessionDateValue =
		container.attributes.getNamedItem("sessionDate")?.value;
	const sessionId = sessionIdValue ? parseInt(sessionIdValue, 10) : undefined;
	const orgId = orgIdValue ? parseInt(orgIdValue, 10) : undefined;
	// eslint-disable-next-line no-console
	console.log(sessionIdValue, orgIdValue, sessionDateValue);
	return (
		<Provider store={store}>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<SRWindow
					sessionId={sessionId}
					orgId={orgId}
					sessionDate={sessionDateValue}
				/>
			</ThemeProvider>
		</Provider>
	);
};

export default SessionRecording;

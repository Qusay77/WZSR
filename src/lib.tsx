/* eslint-disable no-console */
import { Global, ThemeProvider } from "@emotion/react";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
import SRWindow from "packages/Screens/SRWindow";
type ParamsType = {
	sessionId?: string;
	orgId?: string;
	sessionDate?: string;
};
function paramsToObject(
	entries: IterableIterator<[string, string]>,
): ParamsType {
	const result: { [key: string]: string } = {};
	let entry = entries.next();
	while (!entry.done) {
		const [key, value] = entry.value;
		result[key] = value;
		entry = entries.next();
	}
	return result;
}

const SessionRecording = ({
	container,
}: {
	container: { attributes: NamedNodeMap };
}) => {
	const urlParams = new URLSearchParams(window.location.search);
	const entries = urlParams.entries();
	const queryParams = paramsToObject(entries);

	const { sessionId, orgId, sessionDate } = queryParams;
	const sessionIdProps = container.attributes.getNamedItem("sessionId")?.value;
	const orgIdProp = container.attributes.getNamedItem("orgId")?.value;
	const sessionDateValue =
		container.attributes.getNamedItem("sessionDate")?.value;

	console.log(sessionId, orgId, sessionDate, "params");
	console.log(sessionIdProps, orgIdProp, sessionDateValue, "props");

	return (
		<Provider store={store}>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<SRWindow
					sessionId={sessionId ?? sessionIdProps}
					orgId={orgId ?? orgIdProp}
					sessionDate={sessionDate ?? sessionDateValue}
				/>
			</ThemeProvider>
		</Provider>
	);
};

export default SessionRecording;

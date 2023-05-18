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
	const sessionIdValue = container.attributes.getNamedItem("sessionId")?.value;
	const orgIdValue = container.attributes.getNamedItem("orgId")?.value;
	const sessionDateValue =
		container.attributes.getNamedItem("sessionDate")?.value;
	const sessionIdProps = sessionIdValue
		? parseInt(sessionIdValue, 10)
		: undefined;
	const orgIdProp = orgIdValue ? parseInt(orgIdValue, 10) : undefined;
	console.log(sessionId, orgId, sessionDate, "params");
	console.log(sessionIdProps, orgIdValue, sessionDateValue, "props");

	const parsedSessionId = sessionId ? parseInt(sessionId, 10) : undefined;
	const parsedOrgId = orgId ? parseInt(orgId, 10) : undefined;

	return (
		<Provider store={store}>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<SRWindow
					sessionId={parsedSessionId ?? sessionIdProps}
					orgId={parsedOrgId ?? orgIdProp}
					sessionDate={sessionDate ?? sessionDateValue}
				/>
			</ThemeProvider>
		</Provider>
	);
};

export default SessionRecording;

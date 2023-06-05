/* eslint-disable no-console */
import { Global, ThemeProvider } from "@emotion/react";
import { store } from "store";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./Globals/global";
import SRWindow from "packages/Screens/SRWindow";
import { ErrorBoundary } from "react-error-boundary";
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
	sessionId,
	orgId,
	sessionDate,
}: {
	container?: { attributes: NamedNodeMap };
	sessionId?: string;
	orgId: string;
	sessionDate: string;
}) => {
	const urlParams = new URLSearchParams(window.location.search);
	const entries = urlParams.entries();
	const queryParams = paramsToObject(entries);

	const {
		orgId: orgIdParam,
		sessionId: sessionIdParam,
		sessionDate: sessionDateParam,
	} = queryParams;
	const sessionIdProps =
		sessionId ?? container?.attributes?.getNamedItem("sessionId")?.value;
	const orgIdProps =
		orgId ?? container?.attributes?.getNamedItem("orgId")?.value;
	const sessionDateProps =
		sessionDate ?? container?.attributes?.getNamedItem("sessionDate")?.value;
	console.log(orgIdParam, sessionIdParam, sessionDateParam, "params");
	console.log(orgIdProps, sessionIdProps, sessionDateProps, "props");

	return (
		<Provider store={store}>
			<Global styles={GlobalStyles} />
			<ThemeProvider theme={theme}>
				<ErrorBoundary
					onError={(error, componentStack) => {
						// eslint-disable-next-line no-console
						console.log(error, componentStack);
					}}
					fallback={
						<div
							style={{
								backgroundColor: "white",
								width: "100%",
								height: "100vh",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							Error Wrapper &nbsp; <p style={{ color: "red" }}>Catch</p> &nbsp;
							Check console
						</div>
					}
				>
					<SRWindow
						sessionInfo={{
							orgId: orgIdParam ?? orgIdProps,
							sessionId: sessionIdParam ?? sessionIdProps,
							sessionDate: sessionDateParam ?? sessionDateProps,
						}}
					/>
				</ErrorBoundary>
			</ThemeProvider>
		</Provider>
	);
};

export default SessionRecording;

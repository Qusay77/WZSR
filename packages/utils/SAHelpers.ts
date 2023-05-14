import moment from "moment";

export const stringToBase64 = (text: string) => {
	try {
		const base64Equivalent = btoa(text);
		return base64Equivalent;
	} catch (error) {
		try {
			const base64Equivalent = btoa(unescape(encodeURIComponent(text)));
			return base64Equivalent;
		} catch (er) {
			return null;
		}
	}
};
export const objectToQueryString = (queryObject: {
	range: { from: string; to: string };
	filters: {
		queries: Array<{
			key: string;
			operator: string;
			value: string;
			session: string;
		}>;
	};
}) => {
	try {
		const queryAsString = JSON.stringify(queryObject);
		const stringValue = `q=${stringToBase64(queryAsString)}`;
		return stringValue;
	} catch (error) {
		throw error("Convering error:", error.message, error);
	}
};

export const GenerateSessionAnalyticsURl = (userID: string) => {
	const to = moment.utc().format("YYYY-MM-DDTHH:mm:ss");
	const from = moment.utc().subtract(30, "days").format("YYYY-MM-DDTHH:mm:ss");
	const range = { from, to };
	const UserIDFilter = {
		key: "userId",
		operator: "contains",
		value: userID,
		session: "contains",
	};
	const qsObj = { range, filters: { queries: [UserIDFilter] } };
	return objectToQueryString(qsObj);
};

/* eslint-disable no-console */
const isOverflown = ({
	clientWidth,
	clientHeight,
	scrollWidth,
	scrollHeight,
}: {
	clientWidth: number;
	clientHeight: number;
	scrollWidth: number;
	scrollHeight: number;
}) => {
	return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
function copyToClipboard_fallback(text: string) {
	if (window.clipboardData && window.clipboardData.setData) {
		// Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
		return window.clipboardData.setData("Text", text);
	} else if (
		document.queryCommandSupported &&
		document.queryCommandSupported("copy")
	) {
		const textarea = document.createElement("textarea");
		textarea.textContent = text;
		textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
		document.body.appendChild(textarea);
		textarea.select();
		try {
			return document.execCommand("copy"); // Security exception may be thrown by some browsers.
		} catch (ex) {
			console.warn("Copy to clipboard failed.", ex);
			return prompt("Copy to clipboard: Ctrl+C, Enter", text);
		} finally {
			document.body.removeChild(textarea);
		}
	}
}
const copyToClipboard = (str: string) => {
	try {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
			return navigator.clipboard.writeText(str);
		} else {
			copyToClipboard_fallback(str);
		}
	} catch (e) {
		throw new Error("The Clipboard API is not available.");
	}
};

const mobileShare = () => {
	if (navigator.share) {
		navigator
			.share({
				title: document.title,
				text: "SR",
				url: location.href,
			})
			.then(() => console.log("Successful share"))
			.catch((error) => console.log("Error sharing:", error));
	}
};
const isMacSafariOrChrome = () => {
	const userAgent = window.navigator.userAgent.toLowerCase();
	// const isMac = /mac/.test(navigator.platform.toLowerCase());
	const isSafari =
		userAgent.includes("safari") && !userAgent.includes("chrome");
	const isChrome = userAgent.includes("chrome");

	return isSafari || isChrome;
};
export { isOverflown, copyToClipboard, mobileShare, isMacSafariOrChrome };

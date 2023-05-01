import { copyToClipboard, mobileShare } from "packages/utils";
import {
	ShareRecordingButton,
	SRHeaderBlock,
	SRHeaderContainer,
} from "./Blocks";
import { ReactComponent as ShareIcon } from "./svg/share.svg";
const SRHeader = () => {
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	return (
		<SRHeaderContainer>
			<SRHeaderBlock
				onClick={() =>
					isMobile ? mobileShare() : copyToClipboard("recording link")
				}
			>
				<p>Session Recording</p>
				<ShareRecordingButton>
					<ShareIcon />
					<p>Share Recording</p>
				</ShareRecordingButton>
			</SRHeaderBlock>
		</SRHeaderContainer>
	);
};
export default SRHeader;

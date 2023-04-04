import {
	ShareRecordingButton,
	SRHeaderBlock,
	SRHeaderContainer,
} from "./Blocks";
import { ReactComponent as ShareIcon } from "./svg/share.svg";
const SRHeader = () => {
	return (
		<SRHeaderContainer>
			<SRHeaderBlock>
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

import styled from "@emotion/styled";
import ToggleSwitch from "packages/UIKit/ToggleSwitch";

const TimeLineHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	width: 100%;
	height: 22px;
	> P {
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		text-align: justify;
		text-transform: capitalize;
		color: var(--Text-Header);
	}
`;

const SwitchBlockContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 24px;
	height: 20px;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: var(--Text-Body);
	}
`;

const SessionTimeLineHeader = () => {
	return (
		<TimeLineHeaderContainer>
			<p>Session Timeline</p>
			<SwitchBlockContainer>
				<p>Errors only</p>
				<ToggleSwitch />
			</SwitchBlockContainer>
		</TimeLineHeaderContainer>
	);
};

export default SessionTimeLineHeader;

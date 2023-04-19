import styled from "@emotion/styled";
import ToggleSwitch from "packages/UIKit/ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { EventsDetails, setIsErrorsOnly } from "store/state/EventsDetails";

const TimeLineHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	width: 100%;
	height: 22px;
	> p {
		font-style: normal;
		font-weight: 600;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 18, 1000, 1920)};
		line-height: 22px;
		text-align: justify;
		text-transform: capitalize;
		color: var(--Text-Header);
	}
	@media only screen and (max-width: 1000px) {
		> p {
			font-size: ${({ theme }) => theme.helpers.clamp(12, 18, 260, 1000)};
		}
	}
`;

const SwitchBlockContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${({ theme }) => theme.helpers.clamp(10, 24, 1000, 1920)};
	height: 20px;
	> p {
		font-style: normal;
		font-weight: 400;
		font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 1000, 1920)};
		line-height: 17px;
		color: var(--Text-Body);
	}

	@media only screen and (max-width: 1000px) {
		gap: ${({ theme }) => theme.helpers.clamp(10, 24, 260, 1000)};
		> p {
			font-size: ${({ theme }) => theme.helpers.clamp(12, 14, 260, 1000)};
		}
	}
`;

const SessionTimeLineHeader = () => {
	const dispatch = useDispatch();
	const { errorsOnly } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	return (
		<TimeLineHeaderContainer>
			<p>Session Timeline</p>
			<SwitchBlockContainer>
				<p>Errors only</p>
				<ToggleSwitch
					checked={errorsOnly}
					onChange={() => dispatch(setIsErrorsOnly())}
				/>
			</SwitchBlockContainer>
		</TimeLineHeaderContainer>
	);
};

export default SessionTimeLineHeader;

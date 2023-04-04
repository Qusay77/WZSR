import styled from "@emotion/styled";
import { InfoBlock, InfoBlocksContainer } from ".";
import { Calendar, Chrome, Copy, Mobile, Referrer, User } from "../svg";
import { CircleFlag } from "react-circle-flags";
const TextSeparator = styled.div`
	width: 1px;
	height: 17px;
	border: 1px solid var(--Seperation);
`;

const StyledCopy = styled(Copy)`
	cursor: pointer;
`;

const SessionTimeBlock = () => {
	return (
		<div>
			<Calendar />
			<span>
				17.08.2022 <TextSeparator /> 17.08.2022
			</span>
		</div>
	);
};

const DeviceBlock = () => {
	return (
		<div>
			<Mobile />
			<span>Mobile</span>
		</div>
	);
};

const LocationBlock = () => {
	return (
		<div>
			<CircleFlag height={20} countryCode="de" />
			<span>Germany</span>
		</div>
	);
};
const BrowserBlock = () => {
	return (
		<div>
			<Chrome />
			<span>Chrome 110</span>
		</div>
	);
};

const UserIdBlock = () => {
	return (
		<div>
			<User />
			<span>
				#UserID <TextSeparator /> <StyledCopy />
			</span>
		</div>
	);
};
const ReferrerBlock = () => {
	return (
		<div>
			<Referrer />
			<span>Referrer URL Link</span>
		</div>
	);
};

const InfoMap = [
	{
		label: "Session Time",
		Component: SessionTimeBlock,
	},
	{
		label: "Device",
		Component: DeviceBlock,
	},
	{
		label: "Location",
		Component: LocationBlock,
	},
	{
		label: "Browser",
		Component: BrowserBlock,
	},
	{
		label: "User ID",
		Component: UserIdBlock,
	},
	{
		label: "Referrer",
		Component: ReferrerBlock,
	},
];

const InfoBlocks = ({ showMore }: { showMore: boolean }) => {
	return (
		<InfoBlocksContainer>
			{InfoMap.map(({ label, Component }, i) =>
				showMore && i > 1 ? null : (
					<InfoBlock key={`info-block-${i}`}>
						<p>{label}</p>
						<Component />
					</InfoBlock>
				),
			)}
		</InfoBlocksContainer>
	);
};

export default InfoBlocks;

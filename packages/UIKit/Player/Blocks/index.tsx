import styled from "@emotion/styled";

const PlayerContainer = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	overflow: hidden;
	@media only screen and (min-width: 800px) {
		height: 100%;
	}
`;
const PlayerControlsContainer = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
`;
export { PlayerContainer, PlayerControlsContainer };

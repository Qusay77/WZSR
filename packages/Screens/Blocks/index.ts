import styled from "@emotion/styled";

const SRScreen = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const SRScreenWrapper = styled.div`
	position: relative;
	background-color: #f0f0f0;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
	align-items: center;
	text-align: center;
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export { SRScreen, SRScreenWrapper };

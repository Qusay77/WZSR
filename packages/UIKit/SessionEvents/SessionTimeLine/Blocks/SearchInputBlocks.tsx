import styled from "@emotion/styled";
import { ReactComponent as Search } from "../svg/search.svg";

const SearchInput = styled.input`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 8px 16px 8px 42px;
	gap: 8px;
	width: 100%;
	height: 40px;
	border: 1px solid var(--Seperation);
	border-radius: 4px;
	outline: none;
	&:focus {
		border: 3px solid var(--Blue-Hover);
	}
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: var(--Text-Sub);
`;
const SearchInputContainer = styled.div`
	position: relative;
	width: 100%;
	height: 40px;
`;

const StyledSearchIcon = styled(Search)`
	position: absolute;
	top: 8px;
	left: 16px;
`;
const TimeLineSearch = () => {
	return (
		<SearchInputContainer>
			<StyledSearchIcon />
			<SearchInput type={"text"} placeholder={"Search Events"} />
		</SearchInputContainer>
	);
};

export default TimeLineSearch;

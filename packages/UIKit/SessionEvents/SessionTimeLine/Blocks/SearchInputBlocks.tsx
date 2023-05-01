import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventsDetails, setSearchValue } from "store/state/EventsDetails";
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
	color: var(--Text-Body);
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: var(--Text-Sub);
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: var(--Text-Sub);
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: var(--Text-Sub);
	}
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
	const { searchValue } = useSelector(
		({ EventsState }: { EventsState: EventsDetails }) => EventsState,
	);
	const dispatch = useDispatch();

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(e.target.value));
	};
	return (
		<SearchInputContainer>
			<StyledSearchIcon />
			<SearchInput
				value={searchValue}
				onChange={handleSearch}
				type={"text"}
				placeholder={"Search Events"}
			/>
		</SearchInputContainer>
	);
};

export default TimeLineSearch;

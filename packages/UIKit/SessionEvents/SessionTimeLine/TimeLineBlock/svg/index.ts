import styled from "@emotion/styled";
import { ReactComponent as ArrowDown } from "./arrowdown.svg";
import { ReactComponent as ArrowUp } from "./arrowup.svg";
import { ReactComponent as Error } from "./error.svg";
import { ReactComponent as Record } from "./record.svg";
import { ReactComponent as Warning } from "./warning.svg";

const StyledArrowUp = styled(ArrowUp)`
	cursor: pointer;
`;
const StyledArrowDown = styled(ArrowDown)`
	cursor: pointer;
`;
const StyledRecord = styled(Record)`
	cursor: pointer;
`;
export { StyledArrowDown, StyledArrowUp, Error, StyledRecord, Warning };

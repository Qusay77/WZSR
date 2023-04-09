import styled from "@emotion/styled";
import { css } from "@emotion/react";

const thumb = css`
	-webkit-appearance: none;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: var(--Purple-Primary);
	cursor: move;
	border: 2px solid var(--White);
	transition: background 0.3s ease-in-out;
	cursor: move; /* fallback if grab cursor is unsupported */
	cursor: grab;
	cursor: -moz-grab;
	cursor: -webkit-grab;
	:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
	&:hover {
		border: 4px solid var(--White);
	}
`;
const reset = css`
	-webkit-appearance: none;
	box-shadow: none;
	border: none;
	background: transparent;
`;
const TimeRangeInput = styled.input<{ backgroundSize: string }>`
	user-select: none;
	z-index: 9;
	width: 100%;
	height: 8px;
	appearance: none;
	background: #e6e6e6;
	outline: none;
	background-image: linear-gradient(
		var(--Purple-Primary),
		var(--Purple-Primary)
	);
	background-size: 70% 100%;
	cursor: pointer;
	background-repeat: no-repeat;
	background-size: ${({ backgroundSize }) => backgroundSize};
	::-moz-range-thumb {
		${thumb}
	}
	::-webkit-slider-thumb {
		${thumb}
	}
	::-ms-thumb {
		${thumb}
	}
	::-webkit-slider-runnable-track {
		${reset}
	}
	::-moz-range-track {
		${reset}
	}
	::-ms-track {
		${reset}
	}
`;
export { TimeRangeInput };

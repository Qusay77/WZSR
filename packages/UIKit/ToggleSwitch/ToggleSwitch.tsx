import { useState } from "react";
import Switch from "react-switch";
import { theme } from "src/Globals/global";
import { SwitchTypes } from "./types";
const { ButtonDisabled, BluePrimary } = theme.colors;

const WZConfig = {
	offColor: ButtonDisabled,
	onColor: BluePrimary,
	offHandleColor: BluePrimary,
	onHandleColor: ButtonDisabled,
	uncheckedIcon: false,
	checkedIcon: false,
	height: 20,
	width: 36,
	borderRadius: 33,
};
const ToggleSwitch = ({ onChange, checked, externalConfig }: SwitchTypes) => {
	const [defaultState, setDefault] = useState(false);
	const handleChange = () => {
		setDefault((prev) => !prev);
	};

	const config = externalConfig ?? WZConfig;
	return (
		<Switch
			onChange={onChange ?? handleChange}
			checked={checked ?? defaultState}
			{...config}
		/>
	);
};

export default ToggleSwitch;

import ToggleSwitch from "packages/UIKit/ToggleSwitch";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "General/ToggleSwitch",
	component: ToggleSwitch,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
		layout: "fullscreen",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import SRWindow from "packages/Screens/SRWindow";

const meta = {
	title: "SRWindow/Basic",
	component: SRWindow,
	parameters: {
		layout: "flex",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof SRWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import Toast from "packages/UIKit/Toast";

const meta = {
	title: "General/Toast",
	component: Toast,
	parameters: {
		layout: "fullscreen",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

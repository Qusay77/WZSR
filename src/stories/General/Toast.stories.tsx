import type { Meta, StoryObj } from "@storybook/react";
import { ToastComponent } from "packages/UIKit/Toast";

const meta = {
	title: "General/Toast",
	component: ToastComponent,
	argTypes: {
		type: {
			options: ["error", "success"],
			control: { type: "radio" },
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		type: "error",
	},
};

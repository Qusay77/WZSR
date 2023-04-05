import type { Meta, StoryObj } from "@storybook/react";
import PlayerControls from "packages/UIKit/PlayerControls";

const meta = {
	title: "PlayerControls/PlayerControls",
	component: PlayerControls,
	parameters: {
		layout: "fullscreen",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof PlayerControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

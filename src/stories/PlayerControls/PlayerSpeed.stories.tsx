import type { Meta, StoryObj } from "@storybook/react";
import PlayerSpeed from "packages/UIKit/PlaySpeed";

const meta = {
	title: "PlayerControls/PlayerSpeed",
	component: PlayerSpeed,
	parameters: {
		layout: "fullscreen",
		controls: {
			exclude: /.*/g,
		},
	},
} satisfies Meta<typeof PlayerSpeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
